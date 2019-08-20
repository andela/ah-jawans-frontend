/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const uploadImage = (formData) => async (dispatch) => {
  try {
    if (localStorage.token) {
      axios.defaults.headers.token = localStorage.token;
    } else {
      delete axios.defaults.headers.token;
    }
    dispatch(apiAction({
      method: 'patch',
      url: 'https://ah-jawans-backend.herokuapp.com/api/users',
      data: formData,
      onStart: userActionsTypes.UPLOAD_PROFILE_PICTURE_START,
      onEnd: userActionsTypes.UPLOAD_PROFILE_PICTURE_END,
      onSuccess: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
      onFailure: userActionsTypes.UPLOAD_PROFILE_PICTURE_FAILURE,
    }));
  } catch (error) {
    dispatch(({ error: error.data }));
  }
};
