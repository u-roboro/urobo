import { colors } from '../../consts/colors';
import { loggerTypes } from '../../consts/logger';

import { outputCustomized } from './output-customized';

export const loggerFactory = (category?: string) => ({
  ERROR: (message?: string) => {
    outputCustomized(
      loggerTypes.ERROR.colorForeground,
      message,
      loggerTypes.ERROR.type,
      colors.Reset,
      category
    );
  },
  WARN: (message?: string) => {
    outputCustomized(
      loggerTypes.WARN.colorForeground,
      message,
      loggerTypes.WARN.type,
      colors.Reset,
      category
    );
  },
  INFO: (message?: string) => {
    outputCustomized(
      loggerTypes.INFO.colorForeground,
      message,
      loggerTypes.INFO.type,
      colors.Reset,
      category
    );
  },
  DEBUG: (message?: string) => {
    outputCustomized(
      loggerTypes.DEBUG.colorForeground,
      message,
      loggerTypes.DEBUG.type,
      colors.Reset,
      category
    );
  },
  LOG: (message?: string) => {
    outputCustomized(
      loggerTypes.LOG.colorForeground,
      message,
      loggerTypes.LOG.type,
      colors.Reset,
      category
    );
  },
});
