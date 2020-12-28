export enum ThemePaletteTypeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ErrorResponseType = {
  errorCode: string;
  id: string | null;
  message: string;
};
