import { GigyaRequest } from '../gigya-request';
import { GigyaResponse } from '../gigya-response';

export type GetJWTResponse = GigyaResponse & {
  apiVersion: number;
  id_token: string;
  operation: string;
  requestParams: any;
  AuthToken: string;
  Expiration: number;
};

export type GetJWTRequest =
  GigyaRequest<GetJWTResponse> & {
  apiKey?: string;
  fields?: string;
  expiration?: number;
} & Required<{ callback }>;
