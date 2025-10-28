import * as Yup from 'yup';
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();
Yup.addMethod(Yup.string, 'phone', function (errorMessage) {
    return this.test('phone', errorMessage, function (value) {
        try {
            const { path, createError } = this;
            const countryCode = value.slice(0, value.indexOf(' '));
            const phoneNumber = phoneUtil.parseAndKeepRawInput(value, countryCode);
            return phoneUtil.isValidNumber(phoneNumber)
                ? true
                : createError({ path, message: errorMessage });
        }
        catch (error) {
            return this.createError({ path: this.path, message: "Invalid country code" });
        }
    });
});

export const LetsTalkFormValidation = Yup.object().shape({
    name: Yup.string().required('Please enter your name').matches(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, 'Please enter valid name').min(2, 'At least 2 characters required').max(50, 'Name is too long'),
    email: Yup.string().required('Please enter your email.').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
    contactNumber: Yup.string().phone("Invalid number").required("Please enter contact number"),
    service: Yup.array().of(Yup.string().trim().required('Service is required!')).min(1, 'At least one Service is required'),
    projectRequirement: Yup.string()
        .notRequired() // Not required
        .test('no-only-whitespace', 'Only whitespace is not allowed', value => {
            // Allow empty values, but show an error for only whitespace
            return value === undefined || value.trim() !== '';
        })
        .test('no-leading-space', 'No leading spaces allowed', value => {
            return value === undefined || value === '' || !/^\s/.test(value); // Ensure it doesn't start with a space
        })
        .test('no-trailing-space', 'No trailing spaces allowed', value => {
            return value === undefined || value === '' || !/\s$/.test(value); // Ensure it doesn't end with a space
        }),
    // files: Yup.array()
    //     .of(
    //         Yup.mixed()
    //             .test('fileSize', 'File size is too large. Maximum size is 10MB.', value => {
    //                 if (!value) return true; // Skip validation if no file is provided
    //                 return value.size <= 100 * 1024 * 1024; // Validate file size
    //             })
    //             .test('fileType', 'Only images (jpg, png) and PDFs are allowed.', value => {
    //                 if (!value) return true; // Skip validation if no file is provided
    //                 const fileType = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    //                 return fileType.includes(value.type); // Validate file type
    //             })
    //     )
    //     .notRequired()
});

export const NewsLetterFormValidation = Yup.object().shape({
    email: Yup.string().required('Please enter your email.').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
});