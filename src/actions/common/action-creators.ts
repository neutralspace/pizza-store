import { ActionObjectType,
  LOADING } from './constants';

export const setLoadingStatusAction = (status: boolean): ActionObjectType => ({
  type: LOADING,
  payload: {
    status: status,
  }
});