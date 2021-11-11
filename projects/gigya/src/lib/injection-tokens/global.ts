import { InjectionToken } from '@angular/core';
import { Gigya, OnGigyaServiceReady } from '../models';

export type Global = Window & Partial<{
  gigya: Gigya;
  onGigyaServiceReady: OnGigyaServiceReady;
}>;

const global: Global = window;

export const GLOBAL = new InjectionToken<Global>('global', {
  providedIn: 'any',
  factory: /* istanbul ignore next */ () => global
});
