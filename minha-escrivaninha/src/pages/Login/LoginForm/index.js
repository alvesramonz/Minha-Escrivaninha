import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Validator from 'validator';

import { toast } from 'react-toastify';
// import { Container } from './styles';

function LoginForm() {
  const [data, setData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleOnChange(event) {
    setData(...data, event.target.value);
  }

  function handleOnSubmit(event) {
    const errors = validate(data);
    setData(errors);

    if (Object.keys(errors).length === 0) {
      this.props.submit(data);
    }
  }

  function validate(data) {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  }

  return (
    <form onSubmit={() => handleOnSubmit()}>
      <>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
          value={data.email}
          onChange={handleOnChange}
        />
        {/* {errors.email && toast.error(errors.email)} */}
      </>
      <>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={data.password}
          onChange={handleOnChange}
        />
        {/* {errors.password && toast.error(errors.password)} */}
      </>
      <button type="submit">Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
