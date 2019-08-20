/** Include middlewares */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ah-jawans-backend.herokuapp.com/api/',
});

// eslint-disable-next-line max-len
const postDataThunk = (method, endpoint, actionCreator, data) => (dispatch) => axiosInstance[method](endpoint, data)
  .then((response) => {
    dispatch(actionCreator(response.data));
  }).catch((error) => {
    dispatch(actionCreator({ errors: error.response.data.error || error.response.data.errors[0] }));
  });

export default postDataThunk;
