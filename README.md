# Project Report: Form Submission system

## Overview

The Form Submission System is a web application designed to collect user data through a form and handle the submission process effectively. The application is built using React, Formik, Yup, EmailJS, and react-hot-toast to ensure seamless form handling, validation, email notifications, and user feedback.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Formik**: A library for handling forms in React, providing robust form handling capabilities.
- **Yup**: A schema builder for validation, used in conjunction with Formik to validate form inputs.
- **EmailJS**: A service that allows sending emails directly from the client-side application.
- **react-hot-toast**: A library for displaying toast notifications, providing user feedback on form submission.

## Installation and Setup

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) installed.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

   ## Components

### Form Component

The `Form` component handles the rendering, validation, and submission of the form. It utilizes Formik for managing form state and Yup for schema validation. On form submission, data is sent to an email using EmailJS, and user feedback is provided via react-hot-toast notifications.

Key functionalities include:

- **Rendering Form Inputs**: Text input fields for name, email, and password.
- **Validation**: Ensuring that the input data meets specified criteria.
- **Form Submission**: Sending the data via EmailJS and providing user feedback.

### Validation Schema

The `Validation` schema defines the rules for validating the form inputs using Yup. This ensures that:

- The name contains only letters and spaces and is between 3 and 15 characters long.
- The email is in a valid format.
- The password includes at least one uppercase letter, one lowercase letter, one number, one special character, and is at least 8 characters long.

### App Component

The `App` component serves as the root component of the application. It includes the `Form` component and integrates `react-hot-toast` for displaying notifications.

## Detailed Explanation of Key Features

### Form Handling with Formik

Formik simplifies form handling by providing methods and props for managing form state, handling validation, and processing form submissions. In this project, Formik is used to:

- Initialize form state with `initialValues`.
- Handle changes and validation with `handleChange`, `handleBlur`, and `validationSchema`.
- Submit the form data with `handleSubmit`.

### Validation with Yup

Yup is used in conjunction with Formik to validate form inputs. The `Validation` schema defines the validation rules for each form field, ensuring that the data entered by users meets the required criteria before submission.

### Email Notifications with EmailJS

EmailJS enables sending emails directly from the client-side application without requiring a backend server. In this project, it is configured to send form data to a specified email address upon successful form submission.

### User Feedback with react-hot-toast

react-hot-toast provides a simple and elegant way to display toast notifications. It is used to inform users of the success or failure of their form submission, enhancing the user experience.

## Conclusion

The Form Submission System is a robust and user-friendly application designed to handle user data collection and submission efficiently. By leveraging modern web technologies such as React, Formik, Yup, EmailJS, and react-hot-toast, the application ensures a seamless and intuitive user experience.

