/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import Joi from 'joi-browser';

export default Joi.object().keys({
  firstName: Joi.string()
    .min(2)
    .max(45)
    .trim()
    .alphanum()
    .optional()
    .label('First name'),
  lastName: Joi.string()
    .min(2)
    .max(45)
    .trim()
    .alphanum()
    .optional()
    .label('Last name'),
  username: Joi.string()
    .regex(/^[A-Za-z_-]+$/)
    .min(3)
    .max(45)
    .optional()
    .error((errors) => ({
      message: 'username is required, should at list contains 3 letters and can have underscores(_) and hyphens (-)',
    })),
  email: Joi.string()
    .regex(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    .min(5)
    .max(100)
    .optional()
    .error((errors) => ({
      message: 'Email is required and should look like: example@example.com!',
    })),
  bio: Joi.string()
    .min(5)
    .optional(),
  image: Joi.string()
    .min(5)
    .max(100)
    .optional(),
});
