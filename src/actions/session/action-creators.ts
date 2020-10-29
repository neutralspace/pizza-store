import { ActionObjectType } from '../common/constants';
import { GET_SESSION_DATA } from './constants';
import { SessionType } from '@reducers/session-reducer';

export const getSessionDataAction = (data: SessionType): ActionObjectType => ({
  type: GET_SESSION_DATA,
  payload: {
    session: data,
  },
});