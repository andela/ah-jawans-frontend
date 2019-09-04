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
};
