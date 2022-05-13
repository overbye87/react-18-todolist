import React from 'react'
import { useFormik } from 'formik';
import axios from '../api/api.js';
import { AxiosError } from 'axios';

interface IValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  login: string;
}

const initialValues = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: '',
  lastName: '',
  login: '',
}

const SignUp = () => {
  const onSubmit = async (values : IValues) => {
    try {
      const res = await axios.post('auth/signup', values)
      alert(res.data.message);
      console.log(res.data.message)
      // console.log(localStorage.getItem('token'))
    } catch (error) {
      alert((error as AxiosError).response?.data.message);
      console.log((error as AxiosError).response?.data.message)
    }

  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={formik.handleSubmit} className="sign-in-form">
        <label>
          {'Email: '}
          <input
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          {'Password: '}
          <input
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          {'Name: '}
          <input
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          {'Surname: '}
        <input
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          {'Login: '}
        <input
            name="login"
            type="text"
            value={formik.values.login}
            onChange={formik.handleChange}
          />
        </label>
        <input type="submit" value="Register new user"/>
      </form>
    </>
  )
}

export default SignUp