import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const SignUp = () => {
  const history = useHistory();
  const [signupData, setSignUpData] = useState({});

  const handleChange = (event) => {
    setSignUpData({ ...signupData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', signupData);
    } catch (error) {
      swal('SingUp unsuccessful. Please try again.', { icon: 'error' });
    }

    history.push('/dashboard/events');
  };
  return (
    <div className="container">
      <div className="main-area flex">
        <form
          className="form"
          name="signup-form"
          method="POST"
          action="/api/users/signup"
        >
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              className="text-input"
              type="text"
              placeholder="Username"
              name="name"
              // style={{ marginRight: '1/5rem' }}
            />
          </div>
          <div className="inner-form">
            <input
              className="text-input"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="password"
              className="text-input"
              placeholder="Password"
            />
          </div>
          <div className="btn-area">
            <input
              type="submit"
              className="btn-1"
              value="SignUp"
              onClick={() => {
                history.push('/dashboard/events');
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
