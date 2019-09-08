import * as types from '../actionTypes/notificationTypes';

const optInEmailAction = (payload) => ({
  type: types.OPT_IN_EMAIL,
  payload,
});

const optOutEmailAction = (payload) => ({
  type: types.OPT_OUT_EMAIL,
  payload,
});
const optInAppAction = (payload) => ({
  type: types.OPT_IN_APP,
  payload,
});
const optOutAppAction = (payload) => ({
  type: types.OPT_OUT_APP,
  payload,
});


export {
  optInEmailAction, optOutEmailAction,
  optInAppAction, optOutAppAction,
};
