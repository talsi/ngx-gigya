import { GigyaEventHandler } from '../gigya-event-handler';
import { AfterScreenLoadEvent, AfterSubmitEvent, BeforeScreenLoadEvent, BeforeSubmitEvent, BeforeValidationEvent, CustomButton, ErrorEvent, FieldChangedEvent, HideEvent, SubmitEvent } from './events';

export type ShowScreenSetEventHandlers = {
  onError?: GigyaEventHandler<ErrorEvent>;
  onBeforeSubmit?: GigyaEventHandler<BeforeSubmitEvent>;
  onSubmit?: GigyaEventHandler<SubmitEvent>;
  onBeforeValidation?: GigyaEventHandler<BeforeValidationEvent>;
  onAfterSubmit?: GigyaEventHandler<AfterSubmitEvent>;
  onBeforeScreenLoad?: GigyaEventHandler<BeforeScreenLoadEvent>;
  onAfterScreenLoad?: GigyaEventHandler<AfterScreenLoadEvent>;
  onFieldChanged?: GigyaEventHandler<FieldChangedEvent>;
  onHide?: GigyaEventHandler<HideEvent>;
};

export type ShowScreenSetRequest = ShowScreenSetEventHandlers & {
  screenSet: string;
  containerID?: string;
  authFlow?: 'popup'|'redirect';
  cid?: string;
  context?: any;
  customButtons?: CustomButton[];
  customLang?: any;
  dialogStyle?: 'modern'|'legacy';
  deviceType?: 'desktop'|'mobile'|'auto';
  enabledProviders?: string;
  googlePlayAppID?: string;
  lang?: string;
  mobileScreenSet?: string;
  redirectMethod?: 'get'|'post';
  redirectURL?: string;
  regSource?: string;
  regToken?: string;
  sessionExpiration?: number;
  startScreen?: string;
};
