import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import FollowerCards from '../../../components/followerCards';

const props = {
    follower:[{follower: {username: 'kagabo',image: 'mgwe'}}],
    viewProfile:jest.fn(),
    followThem: jest.fn(),
    unfollow: jest.fn(),
    follow: jest.fn(),
}
const component = shallow(<FollowerCards {...props}/>);
describe('followercards component', () => {
    it('it should render', () => {
        expect(component).toBeDefined();
    })

    it('it should render with data image', () => {
        shallow(<FollowerCards {...props}/>);
        // expect(component.find('button').length).toBe(2);
    })

    it('it should render with new default image data', () => {
        const newProps = { ...props, follower: [{ follower: {username: 'kagabo'}}] };
        const newcomponent = shallow(<FollowerCards {...newProps}/>);
        // expect(component.find('button').length).toBe(2);
    });
})
