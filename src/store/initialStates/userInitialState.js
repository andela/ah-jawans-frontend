localStorage.user = {
  id: 36,
  username: 'shalu-Chandwani-vaswani',
  firstName: null,
  lastName: null,
  email: 'shaluVachandwani@rocketmail.com',
  bio: null,
  image: null,
};
localStorage.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWx1LUNoYW5kd2FuaS12YXN3YW5pIiwiaWQiOjY4LCJlbWFpbCI6InNoYWx1VmFjaGFuZHdhbmlAcm9ja2V0bWFpbC5jb20iLCJ2ZXJpZmllZCI6ZmFsc2UsInJvbGVzIjpbIm5vcm1hbFVzZXIiXSwiaWF0IjoxNTY2NjgwOTk0LCJleHAiOjE1NjY4NTM3OTR9.9m1fZtG5-eVQMpVYUPbnYJB_3r292Vp2MH5_eOVI704';
module.exports = {
  // profile: JSON.parse(localStorage.user || '{}'),
  profile: localStorage.user || '{}',
  isAuth: !!localStorage.token,
  signup: {
    loading: false,
    message: '',
    errors: {},
  },
  login: {
    loading: false,
    message: '',
    errors: {},
  },
  getUser: {
    loading: false,
    message: '',
    errors: {},
  },
  editProfile: {
    loading: false,
    message: '',
    errors: {},
  },
  uploadImage: {
    loading: false,
    image: {},
    errors: {},
  },
};
