import React from 'react';
import { Link } from 'react-router-dom';
import Validate from '../utils/Validate';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };

    Validate(name, value, errors);

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    let { username, email, password, errors } = this.state;
    return (
      <section className="mx-auto max-w-lg py-12">
        <header className="text-center">
          <h1 className=" text-4xl">Signup</h1>
          <h6 className="mt-4 text-green-600 text-xl">
            <Link to="/signin">Have an account?</Link>
          </h6>
        </header>
        <form onSubmit={this.handleSubmit} className="mt-8 text-center">
          <input
            className="block w-full border px-4 py-2 mt-6 mb-3"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <span className="text-xl text-red-600">{errors.username}</span>
          <input
            className="block w-full border px-4 py-2 mt-6 mb-3"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <span className="text-xl text-red-600">{errors.email}</span>
          <input
            className="block w-full border px-4 py-2 mt-6 mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <span className="text-xl text-red-600">{errors.password}</span>
          <div className="text-right">
            <button
              disabled={errors.username || errors.email || errors.password}
              className="bg-green-600 text-white text-xl px-4 py-2 disabled:bg-gray-400 rounded"
            >
              Sign up
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default SignUp;
