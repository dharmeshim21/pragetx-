import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

Yup.addMethod(Yup.string, 'phone', function (errorMessage) {
  return this.test('phone', errorMessage, function (value) {
    const { path, createError } = this;

    if (!value || value.trim() === '') return true;

    try {
      // Detect dial code and parse number correctly
      // You can replace 'IN' with another default if needed
      const phoneNumber = phoneUtil.parseAndKeepRawInput(value, 'IN');
      return phoneUtil.isValidNumber(phoneNumber)
        ? true
        : createError({ path, message: errorMessage });
    } catch (error) {
      return createError({ path, message: 'Invalid phone number format' });
    }
  });
});

export const LetsTalkFormValidation = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name')
    .matches(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, 'Please enter a valid name')
    .min(2, 'At least 2 characters required')
    .max(50, 'Name is too long'),

  email: Yup.string()
    .required('Please enter your email.')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),

  contactNumber: Yup.string()
    .phone('Invalid phone number')
    .required('Please enter contact number'),

  service: Yup.array()
    .of(Yup.string().trim().required('Service is required!'))
    .min(1, 'At least one Service is required'),

  projectRequirement: Yup.string()
    .notRequired()
    .test(
      'no-only-whitespace',
      'Only whitespace is not allowed',
      (value) => !value || value.trim() !== ''
    )
    .test(
      'no-leading-space',
      'No leading spaces allowed',
      (value) => !value || !/^\s/.test(value)
    )
    .test(
      'no-trailing-space',
      'No trailing spaces allowed',
      (value) => !value || !/\s$/.test(value)
    ),
});
