import { locale } from '../consts/locale';
import { ErrorCustomized } from '../protocols';

import { DocumentExistError } from './document-exist-error';

export const ServerError = (error: any): ErrorCustomized => {
  switch (error.name) {
    case 'SequelizeUniqueConstraintError':
      return DocumentExistError();
    default:
      return {
        name: 'ServerError',
        message: error.message || locale.exceptionsMessage.serverError,
      };
  }
};
