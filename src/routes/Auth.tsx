import React from 'react'
import { useFormik } from 'formik';
import axios from '../api/api.js';

interface IValues {
  name: string,
  password: string,
}

const initialValues = {
  name: 'username',
  password: 'password',
}

const Auth = () => {
  const onSubmit = async (values : IValues) => {
    const res = await axios.post('auth', values,)
    console.log(res.data)
    console.log(localStorage.getItem('token'))
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <>
      <h1>Auth</h1>
      <form onSubmit={formik.handleSubmit} className="auth-form">
        <label>
          {'Name: '}
          <input
            name="name"
            type="text"
            value={formik.values.name}
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

export default Auth