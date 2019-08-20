module.exports = {
  profile: localStorage.user || '{}',
  isAuth: !!localStorage.token,
  userCredentials: {},
  errors: null,
  signupSuccess: {},
  getUser: {},
  editProfile: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  uploadImage: {
    loading: false,
    image: {},
    errors: {},
  },
  notifications: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  getAllfollower: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  getAllfollowing: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  getAllUsers: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  follow: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  unfollow: {
    loading: false,
    message: '',
    errors: {},
    data: {},
  },
  followerNumber: '',
  followingNumber: '',

  articles: [],
};
