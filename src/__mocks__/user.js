export default (Object.user = {
  firstName: 'shaluV',
  lastName: 'chandwani',
  username: 'shalu-Chandwani-vaswani',
  email: 'shaluVachandwani@rocketmail.com',
  image: 'image.jpg',
});

export const userToRegister = {
  ...Object.user,
  password: 'Pankaj@1993',
  confirmPassword: 'Pankaj@1993',
};

export const mismatchedUserPassword = {
  ...Object.user,
  password: 'Pankaj@1993',
  confirmPassword: '1234abcd',
};

export const wrongUserPassword = {
  ...Object.user,
  password: 'Abcd1234',
};
