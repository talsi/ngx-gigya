import { Component } from '@angular/core';
import { GetAccountInfoResponse, GigyaService, LoginEvent } from 'ngx-gigya';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  account$:  Observable<GetAccountInfoResponse | LoginEvent | undefined> = this.gigya.account$;

  constructor(private gigya: GigyaService) {
    gigya.accounts.getAccountInfo({
      callback: (accountInfo: GetAccountInfoResponse) => {
        if (!accountInfo?.profile) {
          gigya.accounts?.showScreenSet({
            screenSet: 'Default-RegistrationLogin',
            startScreen: 'gigya-login-screen'
          });
        }
      }
    })
  }
}
