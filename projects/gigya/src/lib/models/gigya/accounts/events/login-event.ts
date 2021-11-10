import { GigyaResponse } from '../../gigya-response';

export type LoginEvent = GigyaResponse & {
  eventName: string;
  source: string;
  context: any;
  UID: string;
  UIDSignature: string;
  signatureTimestamp: string;
  loginMode: string;
  newUser: boolean;
  provider: string;
  profile: any;
  data: any;
  remember: boolean;
};
