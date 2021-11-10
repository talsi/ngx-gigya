import { GigyaCallback } from './gigya-callback';

export type GigyaRequest<T = {}> = {
  callback?: GigyaCallback<T>;
  context?: object;
};
