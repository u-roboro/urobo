import { locale } from '../consts/locale';
import { ErrorCustomized } from '../protocols';

export const DocumentExistError = (): ErrorCustomized => ({
  name: 'DocumentExistError',
  message: locale.exceptionsMessage.documentExists,
});
