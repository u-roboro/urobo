import { colors } from '../consts/colors';

export const loggerFactory = (category?: string) => ({
  ERROR: (message: string) => {
    output(colors.fg.Red, message, 'ERROR', category);
  },
  WARN: (message: string) => {
    output(colors.fg.Yellow, message, 'WARN', category);
  },
  INFO: (message: string) => {
    output(colors.fg.Cyan, message, 'INFO', category);
  },
  DEBUG: (message: string) => {
    output(colors.fg.Magenta, message, 'DEBUG', category);
  },
  TRACE: (message: string) => {
    output(colors.fg.White, message, 'TRACE', category);
  },
  LOG: (message: string) => {
    output(colors.fg.White, message, 'LOG', category);
  },
});

const output = (
  colorForeground: string,
  text: string,
  typeOutput: string,
  title?: string
) => {
  console.log(
    colorForeground,
    `[${generateTime()}] [${typeOutput}] ${title ? ` ${title}` : ''} ${text}`,
    colors.Reset
  );
};

const generateTime = () => {
  return new Date().toISOString().split('T').join(' ');
};
