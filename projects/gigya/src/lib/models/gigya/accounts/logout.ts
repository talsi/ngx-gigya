import { GigyaRequest } from '../gigya-request';


export type LogoutRequest = GigyaRequest & {
  cid?: string;
  forceProvidersLogout?: boolean;
};
