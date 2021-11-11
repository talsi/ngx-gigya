import { InjectionToken } from '@angular/core';
import { Gigya } from '../models';
import { Global } from './global';

const global: Global = window;

export const GIGYA = new InjectionToken<Gigya>('gigya', {
  providedIn: 'any',
  factory: /* istanbul ignore next */ () => global.gigya as Gigya
});
