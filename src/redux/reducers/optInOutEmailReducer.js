import * as types from '../actionTypes/notificationTypes';
import initialState from '../store/initialStates/userInitialState';


const optInOutEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPT_IN_EMAIL:
      return {
        ...state,
        notifications: { ...state.notifications, data: action.payload },
      };
    case types.OPT_OUT_EMAIL:
      return {
        ...state,
        notifications: { ...state.notifications, data: action.payload },
      };
    default:
      return state;
  }
};
export default optInOutEmailReducer;
