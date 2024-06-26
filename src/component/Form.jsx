// import React, { useRef } from 'react'
import {useFormik} from 'formik'
import Validation from './Validation'
// import axios from 'axios'
import emailjs from '@emailjs/browser'
import  toast from 'react-hot-toast'
const Form = () => {
  const initialValues={
    name:"",
    email: "",
    password: ""
  }

//  const {values ,touched,handleSubmit, handleChange ,handleBlur ,errors}=  useFormik({
//     initialValues:initialValues,
//     validationSchema: Validation,
//     onSubmit:(values ,action)=>{
//       toast.success('Form submitted successfully!')
//       console.log(values)
//     //   axios.post('https://sheet.best/api/sheets/8942aa02-7c0b-48fd-b0f9-1cd63fd74a89',values).then((respons)=>console.log(respons))
//       // axios.post('16sJFD6wcqcZw3TU6UcPp2zpLFBSbZ-c7uz_h1lF-QIM',values).then((respons)=>console.log(respons))
//       emailjs.send('service_y0l55xt', 'template_5sqo8yc', values, 'YOUR_USER_ID')
//       .then((response) => {
//         console.log('Email sent successfully:', response);
//         toast.success('Form submitted successfully!');
//       }, (error) => {
//         console.error('Error sending email:', error);
//         toast.error('Failed to submit form. Please try again later.');
//       });
//     action.resetForm();
  
//     }
//   })
const { values, touched, handleSubmit, handleChange, handleBlur, errors } = useFormik({
  initialValues,
  validationSchema: Validation,
  onSubmit: (values, action) => {
    const formData = {
      name: values.name,
      email: values.email,
      message: values.password
    };
  
    emailjs.send('service_u3e8p09', 'template_zfq071l', formData, 's-zOS9RHg1vpl_dgT')
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Failed to submit form. Please try again later.');
      });

    
    toast.success('Form submitted successfully!');
    console.log(values);
 
    // emailjs.send('service_y0l55xt', 'template_5sqo8yc', values.current, {
    //   publicKey: '-UMbo7ZYf20TopW6O',
    // })

    action.resetForm();
  }
});
  
  console.log(errors)
  return (
    <>
    <div className='outer'>

    <div className="form-bg">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center w-100 h-100">
      <div className="col col-md-offset-4">
        <div className="form-container signup-form-container">
          <div className="form-icon">
            <i className="fa fa-user" />
          </div>
          <h3 className="title">Sign Up</h3>
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor='name'>Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete='off'

              />
    {
                errors.name && touched.name ?(
              <p className='text-danger eror'>{errors.name}</p>

                ):null
              }
            </div>
            <div className="form-group">
              <label htmlFor='email'>email</label>
              <input
                className="form-control"
                type="email"
                placeholder="email address"
                name="email"
                id="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete="off"
              />
           {
                errors.email && touched.email ?(
              <p className='text-danger eror'>{errors.email}</p>

                ):null
              }

            </div>
            <div className="form-group">
              <label htmlFor="pass">password</label>
              <input
                className="form-control"
                type="password"
                placeholder="password"
                name="password"
                id="pass"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete='off'

              />

              {
                errors.password && touched.password ?(
              <p className='text-danger eror'>{errors.password}</p>

                ):null
              }

            </div>
            <button type="submit" className="btn btn-default">
            Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
    </>
  )
}

export default Form
