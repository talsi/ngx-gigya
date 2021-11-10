import { AddEventHandlersParams, GetAccountInfoRequest, GetJWTRequest, LogoutRequest, ShowScreenSetRequest } from './accounts';

export type GigyaAccounts = {

  /**
   * This method allows setting event handlers for each of the supported global events.
   *
   * @see https://developers.gigya.com/display/GD/accounts.addEventHandlers+JS
   */
  addEventHandlers(params: AddEventHandlersParams): void;

  /**
   * This method loads a screen-set, binds it to its functionality,and, by default, renders the initial screen of the screen-set.
   * When using this method with Screen-Sets hosted on Gigya (via the UI Builder),
   * the latest version of the screen-set in your account will always be the one displayed.
   *
   * @see https://developers.gigya.com/display/GD/accounts.showScreenSet+JS
   */
  showScreenSet(params: ShowScreenSetRequest): void;

  /**
   * This method retrieves user account data.
   *
   * @see https://developers.gigya.com/display/GD/accounts.getAccountInfo+JS
   */
  getAccountInfo(params?: GetAccountInfoRequest): void;

  /**
   * This API is used to obtain an id_token containing the active session's user data in JWS format.
   * This id_token can then be transmitted between servers, enabling a partner to share a user's data among multiple sites/API keys.
   * You can validate the JWT using the originating site's public key returned from accounts.getJWTPublicKey.
   *
   * @see https://developers.gigya.com/display/GD/accounts.getJWT+JS
   */
  getJWT(params: GetJWTRequest): void;

  /**
   * This method Logs out the current user of your site.
   * Please note, that this method does not disconnect the user from the social providers,
   * the user's site account remains associated with any connected social accounts,
   * even when logged out. When the user logs in again, full access to all the previously connected providers is restored,
   * i.e. the association remains.
   * To ensure that the logout completes successfully, you should be sure to not perform any breaking actions,
   * such as page reload or redirect, until after the response from this method is received, or the logout may not complete.
   * Gigya's platform will also log the user out of Facebook, Yahoo, and Google
   * if the user was connected to these providers via Social Login and forceProvidersLogout='true'.
   *
   * @see https://developers.gigya.com/display/GD/accounts.logout+JS
   */
  logout(params?: LogoutRequest): void;
};
