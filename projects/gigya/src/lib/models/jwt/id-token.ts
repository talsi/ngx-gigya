import { JWT } from './jwt';

export type IdToken = JWT & {
  token: string;
};
