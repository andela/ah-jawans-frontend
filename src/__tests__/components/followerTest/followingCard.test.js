import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import FollowingCards from '../../../components/followingCard';

const props = {
    following:[{followedUser: {username: 'kagabo',image: 'mgwe'}}],
    viewProfile:jest.fn(),
    followThem: jest.fn(),
    unfollow: jest.fn(),
    follow: jest.fn(),
}
const component = shallow(<FollowingCards {...props}/>);
describe('followeringcards component', () => {
    it('it should render', () => {
        expect(component).toBeDefined();
    })

    it('it should render with new default image data', () => {
        const newProps = { ...props, following: [{ followedUser: {username: 'kagabo'}}] };
        const newcomponent = shallow(<FollowingCards {...newProps}/>);
        // expect(newcomponent.find('button').length).toBe(1);
    });
})
