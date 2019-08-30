import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import AllUserView, { FollowerView as View } from '../../../containers/followerViewContainer';
import { mockStore, initialState } from '../../../__mocks__/store';
import {} from '../../../components/Header/Header';
import user from '../../../__mocks__/user';

document.body.innerHTML =
'<div id="myModal"></div> ' +
'<input id="search-btn" value="h"/>' +
'<h5 class="usernamevalue">khd</h5>' +
'<div class="cards"></div> ';

jest.mock('../../../components/Header/Header', () => () => (
    <div id="mocked">hello</div>
))

describe('<following />', () => {
    test('should test ', () => {
        const component = mount(<Provider 
            store={mockStore({
              ...initialState,
              user: { ...initialState.user, profile: { ...user }, userProfile: { ...user } },
              followerData:{
                  getAllUsers:{data:{}},
                  getAllfollower:{data:{},
                  
                },
                follow:{message:''},
                getAllfollowing:{data:{following:[] 
            }},
                unfollow:{message:''}
                },
              getDataThunkPrivate: jest.fn(), 
              signupSuccess: { isAuth: true },
              userCredentials: { profile: { image: '' } },
              follower: 0,
              following: 0,
              followMessage: ''
            })}
          >
            <MemoryRouter>
              <AllUserView />
            </MemoryRouter>
          </Provider>);

        expect(component).toBeDefined();
    });

    test('should test view profile event follow event', () => {

        const props = {
            follower: [
                    {follower:{
                  username: 'kagabo',
                  image: '',
                  username: '',}
                  },{follower:{
                  username: 'ewgehe',
                  image: '',
                  username: '',}
                  },{follower:{
                  username: 'wergkjw',
                  image: '',
                  username: '',}
                      }
                  ],
            followMessage: 'test'
        };
        const component = mount(
            <MemoryRouter>
              <View { ...props } />
            </MemoryRouter>);
          component.setProps({followMessage: 'dwkjhf'})
        expect(component).toBeDefined();
    });

    test('should test view profile event followe pass', () => {
        const props = {
            follower: [
                    {follower:{
                  username: 'kag',
                  image: '',}
                  },{follower:{
                  username: 'ewgehe',
                  image: '',
                  username: '',}
                  },{follower:{
                  username: 'wergkjw',
                  image: '',}
                      }
                  ],
                  following: [
                    {followedUser: {
                      id: 4,
                      username: "kaga",
                      email: "faustinkagabo@outlook.com",
                      image: "jhgh",
                      bio: null,
                      following: null
                    }}
                ],
            followMessage: 'test'
        };
        const component = mount(
            <MemoryRouter>
              <View { ...props } />
            </MemoryRouter>);
          component.find("#search-btn").simulate('change', { target:{value: 'k'}});
          component.setProps({followMessage: 'dwkjhf'});
          component.find("#close").simulate('click', {  });
          component.find("button[id='0followbt']").simulate('click', {  });
          component.find("button[id='0g']").simulate('click', {  });
          component.instance().followerEvent = jest.fn();
        expect(component).toBeDefined();
    });

    test('should test view profile event unfollow pass', () => {
      const props = {
          follower: [
                  {follower:{
                username: 'kag',
                image: '',}
                },{follower:{
                username: 'ewgehe',
                image: '',
                username: '',}
                },{follower:{
                username: 'wergkjw',
                image: '',}
                    }
                ],
                following: [
                  {followedUser: {
                    id: 4,
                    username: "kag",
                    email: "faustinkagabo@outlook.com",
                    image: "jhgh",
                    bio: null,
                    following: null
                  }}
              ],
          followMessage: 'test'
      };
      const component = mount(
          <MemoryRouter>
            <View { ...props } />
          </MemoryRouter>);
        component.find("#search-btn").simulate('change', { target:{value: 'k'}});
        component.setProps({followMessage: 'dwkjhf'});
        component.find("#close").simulate('click', {  });
        component.find("button[id='0unfollowbt']").simulate('click', {  });
        component.find("button[id='0g']").simulate('click', {  });
        component.instance().followerEvent = jest.fn();
      expect(component).toBeDefined();
  });
});
