export type ErrorCustomized = {
  readonly name: string;
  readonly message: string;
};

export type HttpResponse = {
  readonly statusCode: number;
  readonly body: unknown;
};

export type LoggerType = {
  readonly colorForeground: ColorString;
};

export type ColorString = string;
