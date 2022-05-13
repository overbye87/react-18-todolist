import React from 'react'
import { useFormik } from 'formik';
import axios from '../api/api.js';
import { AxiosError } from 'axios';

interface IValues {
  email: string,
  password: string,
}

const initialValues = {
  email: 'admin@admin.ru',
  password: 'admin',
}

const SignIn = () => {
  const onSubmit = async (values : IValues) => {
    try {
      const res = await axios.post('auth', values)
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
      <h1>SignIn</h1>
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
        <input type="submit" value="Login"/>
      </form>
    </>
  )
}

export default SignIn