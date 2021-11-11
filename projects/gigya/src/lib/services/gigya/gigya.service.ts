// noinspection TypeScriptPreferShortImport
import { ZoneAwareProxyService } from '../zone-aware/zone-aware-proxy.service';
import { Inject, Injectable } from '@angular/core';
import {
  AddEventHandlersParams,
  GetAccountInfoRequest,
  GetAccountInfoResponse,
  GetJWTResponse,
  Gigya,
  GigyaAccounts,
  GigyaDS,
  GigyaResponse,
  GSErrors,
  LoginEvent,
  ShowScreenSetRequest
} from '../../models';
import { GIGYA } from '../../injection-tokens';
import { BehaviorSubject, Observable } from 'rxjs';
import { promiseTimeout } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class GigyaService {

  get isLoggedIn$(): Observable<boolean> { return this._isLoggedIn$; }
  get account$(): Observable<GetAccountInfoResponse| LoginEvent | undefined> { return this._account$; }

  constructor(@Inject(GIGYA) private gigya: Gigya,
              private zoneAwareProxySrv: ZoneAwareProxyService) {
    if (!this.gigya) {
      throw new Error('gigya is undefined');
    }
    this.init();
  }

  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _account$: BehaviorSubject<GetAccountInfoResponse | LoginEvent | undefined> = new BehaviorSubject<GetAccountInfoResponse | LoginEvent | undefined>(undefined);

  ds: GigyaDS | undefined;
  accounts: GigyaAccounts | undefined;

  private init(): void {
    this.accounts = this.wrapNamespaceWithZoneAwareProxy<GigyaAccounts>('accounts');
    this.ds = this.wrapNamespaceWithZoneAwareProxy<GigyaDS>('ds');

    this.addEventHandlers({
      onLogin: event => this.onLogin(event),
      onLogout: () => this.onLogout()
    });

    this.isSessionValid()
      .then(async isSessionValid => {

        if (!isSessionValid) {
          return this.onLogout();
        }

        let accountInfo = this._account$.getValue();
        if (!accountInfo) {
          accountInfo = await this.getAccountInfo();
        }

        this.onLogin(accountInfo);
      });
  }

  private onLogin(event: GetAccountInfoResponse | LoginEvent): void {
    if (event.errorCode === GSErrors.UNAUTHORIZED_USER) {
      // this can happen when client side thinks it has a valid login token,
      // but server response with 403005 error UNAUTHORIZED_USER for getAccountInfo request
      return this.onLogout();
    }
    this._isLoggedIn$.next(true);
    this._account$.next(event);
  }

  private onLogout(): void {
    this._isLoggedIn$.next(false);
    this._account$.next(undefined);
  }

  private wrapNamespaceWithZoneAwareProxy<T>(namespace: string): T {
    return new Proxy(this.gigya[namespace], {
      get: (target, prop: string) => {
        return (param: any) => {
          return this.zoneAwareProxySrv.run(target[prop], `gigya.${namespace}.${prop}`, param);
        };
      }
    });
  }

  public isSessionValid(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.gigya['_'].apiAdapter.isSessionValid(undefined, resolve);
    });
  }

  public addEventHandlers(params: AddEventHandlersParams): void {
    this.accounts?.addEventHandlers(params);
  }

  public showScreenSet(params: ShowScreenSetRequest): void {
    this.accounts?.showScreenSet(params);
  }

  public getAccountInfo(params?: GetAccountInfoRequest): Promise<GetAccountInfoResponse> {
    return new Promise<GetAccountInfoResponse>(resolve => {
      this.accounts?.getAccountInfo(Object.assign(params || {}, {
        callback: (accountInfo: GetAccountInfoResponse) => {
          this._account$.next(accountInfo);
          resolve(accountInfo);
        }}));
    });
  }

  public logout(): Promise<GigyaResponse> {
    return new Promise<GigyaResponse>(resolve => {
      this.accounts?.logout({callback: resolve});
    });
  }

  public getJWT(): Promise<GetJWTResponse> {
    const getJWTPromise = new Promise<GetJWTResponse>((resolve) => {
      return this.accounts?.getJWT({ callback: resolve, fields: 'data.userKey' });
    });
    return promiseTimeout<GetJWTResponse>(getJWTPromise);
  }

}
