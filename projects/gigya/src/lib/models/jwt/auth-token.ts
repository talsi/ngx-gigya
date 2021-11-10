import { JWT } from './jwt';

export type AuthToken = JWT & {
  token?: string;
};
