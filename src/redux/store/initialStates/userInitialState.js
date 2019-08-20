module.exports = {
  profile: localStorage.user || '{}',
  isAuth: !!localStorage.token,
  userCredentials: {},
  errors: null,
  signupSuccess: {},
  getUser: {
    loading: false,
    message: '',
    errors: {},
  },
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
};
