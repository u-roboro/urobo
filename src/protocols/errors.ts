export type ErrorTemplate = {
  readonly message: string;
  readonly status: number;
  readonly options?: {
    translate?: boolean;
    localeKey?: string;
    params?: string[];
    name: string;
    type: 'validation' | 'business' | 'system';
  };
};
