import { GigyaRequest } from '../gigya-request';
import { GigyaEventHandler } from '../gigya-event-handler';
import { LoginEvent, LogoutEvent } from './events';

export type AddEventHandlersParams = GigyaRequest & {
  onLogin?: GigyaEventHandler<LoginEvent>;
  onLogout?: GigyaEventHandler<LogoutEvent>;
  cid?: string;
};
