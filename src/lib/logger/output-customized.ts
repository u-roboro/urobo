import { generateTimeSplited } from '../../helpers/generate-time-splited';

export const outputCustomized = (
  colorForeground: string,
  text: string,
  typeLogger: string,
  typeOutput: string,
  title?: string
) => {
  console.log(
    colorForeground,
    `[${generateTimeSplited()}] [${typeLogger}] ${
      title ? `${title}` : ''
    } ${text}`,
    typeOutput
  );
};
