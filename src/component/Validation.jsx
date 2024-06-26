import React from 'react'
import * as Yup from 'yup'

const Validation = Yup.object({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
        .min(3, "Name must be at least 3 characters")
        .max(15, "Name must be at most 15 characters")
        .required("Please enter your name"),
    email: Yup.string().email("Invalid email").required("please enter your email"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
        )
        .required("Please enter your password")

})

export default Validation
