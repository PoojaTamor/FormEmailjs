import {useFormik} from 'formik'
import Validation from './Validation'
import emailjs from '@emailjs/browser'
import  toast from 'react-hot-toast'
// email=pooja.ce.19.073@gmail.com
const Form = () => {
  const initialValues={
    name:"",
    email: "",
    password: ""
  }

const { values, touched, handleSubmit, handleChange, handleBlur, errors } = useFormik({
  initialValues,
  validationSchema: Validation,
  onSubmit: (values, action) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password
    };
  
    emailjs.send('service_y0l55xt', 'template_5sqo8yc', formData, '-UMbo7ZYf20TopW6O')
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
