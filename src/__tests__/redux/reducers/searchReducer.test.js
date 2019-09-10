import reducer from '../../../redux/reducers/searchReducer'
import * as actionTypes from '../../../redux/actions/actionTypes'
import initialState from '../../../redux/store/initialStates/userInitialState'

let userCredentials

describe('Login reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
})
