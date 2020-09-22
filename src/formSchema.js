import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required').min(3, "Name must be at least 2 characters"),
    size: yup.string().oneOf(['8', '12', '14'], "Must choose a pizza size"),
    instructions: yup.string(),
    pepperoni: yup.string(),
    pineapple: yup.string(),
    olives: yup.string(),
    bacon: yup.string(),
})
