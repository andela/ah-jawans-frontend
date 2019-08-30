import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import ViewAllUserCard from '../../../components/viewAllUserCard';

const props = {
    users: [{image:'erbrn', email: ''}],
    handelOnlick: jest.fn(),
    follow: jest.fn(),
    followThem: jest.fn(),
    unfollow: jest.fn(),
    follow: jest.fn(),
}
const component = shallow(<ViewAllUserCard {...props}/>);
describe('followeringcards component', () => {
    it('it should render', () => {
        expect(component).toBeDefined();
    })
})
