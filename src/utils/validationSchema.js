import * as Yup from 'yup';

export const  validateContactForm = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    street: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    zipCode: Yup.string()
    .min(6, 'ZipCode must be at least 6 charaters')
    .required('ZipCode is required'),
    country: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
})
