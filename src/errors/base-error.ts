import { ErrorTemplate } from '../protocols/errors';
import * as locale from '../locales/locale.json';
import { findStringOnObject, replaceByParams } from '../utils';
import { HttpStatusCode } from '../consts/http-status-code';
export class BaseError extends Error implements ErrorTemplate {
  constructor(
    public readonly message: string,
    public readonly status: number = HttpStatusCode.INTERNAL_SERVER_ERROR,
    public readonly options: {
      translate?: boolean;
      localeKey?: string;
      params?: any[];
      name: string;
      type: 'validation' | 'business' | 'system';
    } = {
      name: '',
      type: 'system',
    }
  ) {
    super(message);

    if (options?.translate) {
      if (!options.localeKey) {
        throw new Error(locale.translation.requiredLocaleKey);
      }

      if (!options.params) {
        throw new Error(locale.translation.requiredParams);
      }

      this.message = replaceByParams(
        findStringOnObject(options.localeKey, locale),
        options.params || []
      );
    }
  }
}
