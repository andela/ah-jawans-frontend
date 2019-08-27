/* eslint-disable max-len */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ah-jawans-backend.herokuapp.com/api/',
});

const postDataThunk = (
  method,
  endpoint,
  actionCreator,
  data,
) => (dispatch) => axiosInstance[method](endpoint, data)
  .then((response) => {
    dispatch(actionCreator(response.data));
  })
  .catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.error || error.response.data.errors[0] }));
  });

const getDataThunk = (method, endpoint, actionCreator) => (dispatch) => axiosInstance[method](endpoint)
  .then((response) => {
    dispatch(actionCreator(response.data.profile));
  })
  .catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.error || error.response.data.errors[0] }));
  });

const postDataThunkPrivate = (method, endpoint, actionCreator, data) => (dispatch) => {
  const token = localStorage.getItem('token');
  axiosInstance.defaults.headers.common.token = token;
  return axiosInstance[method](endpoint, data).then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.error || error.response.data.errors[0] }));
  });
};


export { postDataThunk, getDataThunk, postDataThunkPrivate };
