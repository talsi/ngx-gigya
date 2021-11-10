import { GigyaResponse } from '../../gigya-response';

export type CustomButton = ({ idpName: string; } | { opName: string; }) & {
  providerName: string;
  iconURL: string;
  lastLoginIconURL: string;
  type?: string;
  position?: number;
  logoURL?: string;
  openIDURL?: string;
};

export type ErrorEvent = {
  eventName: string;
  source: string;
  context: any;
  screen: string;
  form: string;
  response: GigyaResponse;
};

export type BeforeValidationEvent = {
  eventName: string;
  source: string;
  context: any;
  form: any;
  formData: any;
  data: any;
  profile: string;
  screen: any;
  subscriptions: string;
  instanceID: string;
};

export type BeforeSubmitEvent = {
  eventName: string;
  source: string;
  context: any;
  screen: string;
  form: string;
  profile: any;
  formData: any;
  nextScreen: string;
};

export type SubmitEvent = {
  eventName: string;
  source: string;
  context: any;
  screen: string;
  form: string;
  accountInfo: any;
  formModel: any;
  instanceID: string;
};

export type AfterSubmitEvent = {
  eventName: string;
  source: string;
  context: any;
  screen: string;
  form: string;
  profile: any;
  data: any;
  response: any;
};

export type BeforeScreenLoadEvent = {
  eventName: string;
  source: string;
  context: any;
  currentScreen: string;
  form: string;
  profile: any;
  data: any;
  nextScreen: string;
  response: GigyaResponse;
};

export type AfterScreenLoadEvent = {
  eventName: string;
  source: string;
  context: any;
  currentScreen: string;
  form: string;
  profile: any;
  data: any;
  nextScreen: string;
  response: GigyaResponse;
};

export type FieldChangedEvent = {
  eventName: string;
  source: string;
  context: any;
  screen: string;
  form: string;
  field: string;
  isValid: boolean;
  errMsg: string;
  value: string;
};

export type HideEvent = {
  eventName: string;
  source: string;
  context: any;
  reason: string;
};
