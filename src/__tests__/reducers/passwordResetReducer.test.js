import reducer from '../../redux/reducers/passwordReset';
import * as actionTypes from '../../redux/actionTypes/passwordReset';

let initialState;

describe('Login reducer', () => {
  beforeEach(() => {
    initialState = {
      reset: null,
      errors: null,
      data: null,
      passwordUpdate: null,
    };
  });

  it('Should return the state of EQUEST_PASSWORD_RESET', () => {
    expect(reducer(initialState, {
      type: actionTypes.REQUEST_PASSWORD_RESET,
      payload: { email: 'dgf@ajhdf.com' },
    })).toEqual({
      reset: { email: 'dgf@ajhdf.com' },
      errors: null,
      data: null,
      passwordUpdate: null,
    });
  });

  it('Should return the state of RESET_PASSWORD', () => {
    expect(reducer(initialState, {
      type: actionTypes.RESET_PASSWORD,
      payload: { email: 'dgf@ajhdf.com' },
    })).toEqual({
      reset: null,
      errors: null,
      data: { email: 'dgf@ajhdf.com' },
      passwordUpdate: null,
    });
  });

  it('Should return the state of UPDATE_PASSWORD', () => {
    expect(reducer(initialState, {
      type: actionTypes.UPDATE_PASSWORD,
      payload: { email: 'dgf@ajhdf.com' },
    })).toEqual({
      reset: null,
      errors: null,
      data: null,
      passwordUpdate: undefined,
    });
  });
});
