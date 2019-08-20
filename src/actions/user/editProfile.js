/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const editProfile = (formData) => async (dispatch) => {
  try {
    if (localStorage.token) {
      axios.defaults.headers.token = localStorage.token;
    } else {
      delete axios.defaults.headers.token;
    }
    dispatch(apiAction({
      method: 'patch',
      url: 'https://ah-jawans-backend.herokuapp.com/api/users',
      data: { ...formData },
      onStart: userActionsTypes.EDIT_PROFILE_START,
      onEnd: userActionsTypes.EDIT_PROFILE_END,
      onSuccess: userActionsTypes.EDIT_PROFILE_SUCCESS,
      onFailure: userActionsTypes.EDIT_PROFILE_FAILURE,
    }));
  } catch (error) {
    dispatch(({ error: error.data }));
  }
};
