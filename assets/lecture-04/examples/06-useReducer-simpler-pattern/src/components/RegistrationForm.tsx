/* eslint-disable react/jsx-props-no-spreading */

import { useReducer } from 'react';

import './RegistrationForm.scoped.scss';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function RegistrationForm() {
  const [formData, dispatch] = useReducer(
    (state: FormData, action: Partial<FormData>) => ({ ...state, ...action } as FormData),
    {} as FormData
  );

  return (
    <>
      <fieldset>
        <legend>Registration Form</legend>
        <label htmlFor="firstName">
          First Name
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => {
              dispatch({ firstName: e.target.value });
            }}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => {
              dispatch({ lastName: e.target.value });
            }}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              dispatch({ email: e.target.value });
            }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => {
              dispatch({ password: e.target.value });
            }}
          />
        </label>
        <button
          type="submit"
          onClick={() => {
            console.log(formData);
          }}
        >
          Submit
        </button>
      </fieldset>
      <div className="preview">
        <div>{formData.firstName}</div>
        <div>{formData.lastName}</div>
        <div>{formData.email}</div>
        <div>{formData.password}</div>
      </div>
    </>
  );
}

export default RegistrationForm;
