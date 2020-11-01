export interface ActionObjectType {
  type: string;
  payload?: { [key: string]: any };
}

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
