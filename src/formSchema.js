import * as yup from 'yup'

export default yup.object().shape({
    email: yup.string().required('Email is required'),
    username: yup.string().required('Username is required').min(3, "Username must be at least 3 characters"),
    password: yup.string().required('Password is required').min(8, "Password must be at least 8 characters"),
})
