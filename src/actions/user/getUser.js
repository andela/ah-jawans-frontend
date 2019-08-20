/* eslint-disable import/prefer-default-export */
import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getUser = (username = 'shalu-Chandwani-vaswani') => async (dispatch) => {
  try {
    dispatch(apiAction({
      method: 'get',
      url: `https://ah-jawans-backend.herokuapp.com/api/user/${username}`,
      onStart: userActionsTypes.GET_USER_START,
      onEnd: userActionsTypes.GET_USER_END,
      onSuccess: userActionsTypes.GET_USER_SUCCESS,
      onFailure: userActionsTypes.GET_USER_FAILURE,
    }));
  } catch (error) {
    dispatch(userActionsTypes({ error: error.data }));
  }
};
