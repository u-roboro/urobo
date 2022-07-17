import { locale } from '../consts/locale';
import { ErrorCustomized } from '../protocols';

export const AccessDeniedError = (): ErrorCustomized => ({
  name: 'AccessDeniedError',
  message: locale.exceptionsMessage.accessDenied,
});
