import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import ProfilePopup from '../../../components/profilePopup';

const props = {
    image:'',
    firstName:'',
    lastName:'',
    dob:'',
    bio:'',
    username:'',
    removeModel:jest.fn(),
    followThem: jest.fn(),
    unfollow: jest.fn(),
    follow: jest.fn(),
    message:'',
    buttonName:'follow'
}
const component = shallow(<ProfilePopup {...props}/>);
describe('popup profile component', () => {
    it('it should render', () => {
        expect(component).toBeDefined();
    })
})
