interface Action {
  type: string;
  payload: { [key: string]: any };
}

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const setLoadingStatus = (status: boolean): Action => ({
  type: LOADING,
  payload: {
    status: status,
  }
});