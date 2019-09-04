import * as types from '../actionTypes/notificationTypes';
import initialState from '../store/initialStates/userInitialState';


const optInOutAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPT_IN_APP:
      return {
        ...state,
        notifications: { ...state.notifications, data: action.payload.data },
      };
    case types.OPT_OUT_APP:
      return {
        ...state,
        notifications: { ...state.notifications, data: action.payload.data },
      };
    default:
      return state;
  }
};
export default optInOutAppReducer;
