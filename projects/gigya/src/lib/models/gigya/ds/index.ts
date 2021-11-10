import { GigyaRequest } from '../gigya-request';
import { KeyVal } from '../../../types';

export type DsBaseParams = {
  oid: string;
  type: string;
};

export type DsBaseRequestParams<T = {}> =
  GigyaRequest<T> &
  DsBaseParams;

/***
 * gigya.ds.delete request params
 */
export type DsDeleteParams =
  DsBaseRequestParams;

/**
 * gigya.ds.get request params
 */
export type DsGetParams<T extends KeyVal<S>, S = any> =
  DsBaseRequestParams<{ data: T }>;

/***
 * gigya.ds.store request params
 */
export type DsStoreParams<T extends KeyVal<S>, S = any> =
  DsBaseRequestParams & {
  updateBehavior?: 'arrayPush' | 'arraySet' | 'replace';
  data: T;
};
