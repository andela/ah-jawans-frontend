import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import AllUserView, { AllUserView as View } from '../../../containers/allUserView';
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

describe('<AllUserView />', () => {
    test('should test ', () => {
        const component = mount(<Provider 
            store={mockStore({
              ...initialState,
              user: { ...initialState.user, profile: { ...user }, userProfile: { ...user } },
              followerData:{
                  getAllUsers:{data:{}},
                  getAllfollower:{data:{},
                },getAllfollowing:{data:{}},
                follow:{message:''},
                unfollow:{message:''}
                },
              getDataThunkPrivate: jest.fn(), 
              signupSuccess: { isAuth: true },
              userCredentials: { profile: { image: '' } },
              follower: 0,
              following: 0,
              followMessage: '',
              
            })}
          >
            <MemoryRouter>
              <AllUserView />
            </MemoryRouter>
          </Provider>);

        expect(component).toBeDefined();
    });

    test('should test view profile event', () => {
        const component = mount(<Provider 
            store={mockStore({
              ...initialState,
              user: { ...initialState.user, profile: { ...user }, userProfile: { ...user } },
              followerData:{
                unfollow: {message: ''},
                  getAllUsers:{data:{usersList:[
                      {
                    username: 'kagabo',
                    image: '',
                    username: '',
                    },{
                    username: 'ewgehe',
                    image: '',
                    username: '',
                    },{
                    username: 'wergkjw',
                    image: '',
                    username: '',
                        }
                    ]}},
                  getAllfollower:{data:{},
                },
                getAllfollowing:{data:{}},
                follow:{message:''}
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
          component.find("button[id='0']").simulate('click', {  });
        expect(component).toBeDefined();
    });

    test('should test view profile event follow event', () => {

        const component = mount(<Provider 
            store={mockStore({
              ...initialState,
              user: { ...initialState.user, profile: { ...user }, userProfile: { ...user } },
              followerData:{
                unfollow:{ message: '' },
                  getAllUsers:{data:{usersList:[
                      {
                    username: 'kagabo',
                    image: '',
                    username: '',
                    },{
                    username: 'ewgehe',
                    image: '',
                    username: '',
                    },{
                    username: 'wergkjw',
                    image: '',
                    username: '',
                        }
                    ]},
                  },
                  getAllfollower:{data:{},
                },
                follow:{message:''},
                getAllfollowing: {
                  data: {following:[
                    {
                      userId: 8,
                      followed: 4,
                      followedUser: {
                        id: 4,
                        username: "kag",
                        email: "faustinkagabo@outlook.com",
                        image: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2350991291623412&height=50&width=50&ext=1570127609&hash=AeRNTDLB_0oeoa7P",
                        bio: null,
                        following: null
                      }
                    },
                    {
                      userId: 8,
                      followed: 16,
                      follower: {
                        id: 16,
                        username: "princekagabo",
                        email: "princekagabo2@gmail.com",
                        image: null,
                        bio: null,
                        following: null
                      }
                    }
                  ]}

                },
                getAllfollowing: {
                  data: {following:[
                    {
                      userId: 8,
                      followed: 4,
                      followedUser: {
                        id: 4,
                        username: "kag",
                        email: "faustinkagabo@outlook.com",
                        image: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2350991291623412&height=50&width=50&ext=1570127609&hash=AeRNTDLB_0oeoa7P",
                        bio: null,
                        following: null
                      }
                    },
                    {
                      userId: 8,
                      followed: 16,
                      followedUser: {
                        id: 16,
                        username: "princekagabo",
                        email: "princekagabo2@gmail.com",
                        image: null,
                        bio: null,
                        following: null
                      }
                    }
                  ]}

                },
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
          component.setProps({followMessage: 'dwkjhf'})
        expect(component).toBeDefined();
    });

    test('should test view profile event followe pass', () => {
        const props = {
            allUsers: [
                    {
                  username: 'kag',
                  image: '',
                  },{
                  username: 'ewgehe',
                  image: '',
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
          component.find("button[id='0unfollow']").simulate('click', {  });
          component.find("#close").simulate('click', {  });
          component.instance().followerEvent = jest.fn();
        expect(component).toBeDefined();
    });

    test('should test view profile event unfollow pass', () => {
      const props = {
          allUsers: [
                  {
                username: 'kagabo',
                image: '',
                },{
                username: 'ewgehe',
                image: '',
                },{
                username: 'wergkjw',
                image: '',
                    }
                ],
          unfollowMessage: 'wegjfnen',
      };
      const component = mount(
          <MemoryRouter>
            <View { ...props } />
          </MemoryRouter>);
        component.find("#search-btn").simulate('change', { target:{value: 'k'}});
        component.setProps({unfollowMessage: 'dwkjhf'});
        component.find("#close").simulate('click', {  });
        component.find("button[id='0f']").simulate('click', {  });
        component.instance().unfollowEvent = jest.fn();
      expect(component).toBeDefined();
  });
});
