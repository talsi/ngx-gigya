import { GSErrors } from './gs-errors';

export type GigyaResponse = {
  apiVersion?: number;
  callId: string;
  context?: object;
  errorCode: GSErrors;
  errorDetails?: string;
  errorMessage?: string;
  ignoredParams?: object;
  statusCode: number;
  statusReason: string;
  time: string;
  validationErrors?: Array<{
    message: string;
    fieldName: string;
  }>;
  version: number;
  Response: object;
};

export type GigyaError = Pick<GigyaResponse, 'errorCode' | 'errorDetails' | 'errorMessage'>;
