import { inject, InjectionToken } from '@angular/core';
import { DcEnvUtilsService } from '../services/dc-env-utils/dc-env-utils.service';

export const ADMIN_URL = new InjectionToken<string>('admin-url', {
  providedIn: 'any',
  factory: /* istanbul ignore next */ () => {
    const dcEnvUtils: DcEnvUtilsService = inject(DcEnvUtilsService);
    let dc = dcEnvUtils.getDc();
    if (dc === 'eu5' || dc === 'us5') {
      dc = 'us1';
    }
    return `https://admin.${dc}.gigya.com`;
  }
});

export const AUTH_TOKEN_URL = new InjectionToken<string>('auth-token-url', {
  providedIn: 'any',
  factory: /* istanbul ignore next */ () => {
    const adminUrl: string = inject(ADMIN_URL);
    return `${adminUrl}/admin.console.getAuthToken`;
  }
});

export const INVALIDATE_AUTH_TOKEN_URL = new InjectionToken<string>('invalidate-auth-token-url', {
  providedIn: 'any',
  factory: /* istanbul ignore next */ () => {
    const adminUrl: string = inject(ADMIN_URL);
    return `${adminUrl}/admin.console.invalidateAuthToken`;
  }
});
