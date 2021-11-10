import { GigyaResponse } from './gigya-response';
import { GigyaEventHandler } from './gigya-event-handler';

export type GigyaCallback<T> = GigyaEventHandler<T & GigyaResponse>;
