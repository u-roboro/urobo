import { ErrorTemplate } from '../protocols/errors';
import * as locale from '../locales/locale.json';
import { findStringOnObject, replaceByParams } from '../utils';

export class BaseError extends Error implements ErrorTemplate {
  constructor(
    public readonly message: string,
    public readonly status: number,
    public readonly options?: {
      translate?: boolean;
      localeKey?: string;
      params?: string[];
      name: string;
      type: 'validation' | 'business' | 'system';
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
