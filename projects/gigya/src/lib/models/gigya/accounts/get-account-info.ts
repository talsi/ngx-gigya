import { GigyaRequest } from '../gigya-request';
import { GigyaResponse } from '../gigya-response';

export type GetAccountInfoResponse = GigyaResponse & {
  UID: string;
  UIDSignature: string;
  signatureTimestamp: string;
  created: string;
  createdTimestamp: string;
  data: any;
  emails: any;
  groups: any;
  identities: any[];
  isActive: boolean;
  isLockedOut: boolean;
  isRegistered: boolean;
  isVerified: boolean;
  lastLogin: string;
  lastLoginLocation: any;
  lastLoginTimestamp: number;
  lastUpdated: string;
  lastUpdatedTimestamp: number;
  loginIDs: any;
  loginProvider: string;
  oldestDataUpdated: string;
  oldestDataUpdatedTimestamp: number;
  phoneNumber: string;
  preferences: any;
  profile: any;
  rbaPolicy: any;
  registered: string;
  registeredTimestamp: string;
  regSource: string;
  socialProviders: string;
  subscriptions: any;
  verified: string;
  verifiedTimestamp: string;
};

export type GetAccountInfoRequest = GigyaRequest<GetAccountInfoResponse> & {
  include?: string;
  extraProfileFields?: string;
};
