import { useState, type ChangeEvent } from "react";
import { FIELDS, FIELDS_VALUES } from "./model/SignInForm.constants";
import './SignInForm.scss';

const SignInForm = () => {
  const { NAME, ROOM } = FIELDS_VALUES;
  const [values, setValues] = useState({ [NAME]: '', [ROOM]: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  return (
    <div className='container'>
      <h2 className='title'>
        <span className='title__first-char'>R</span>
        OOM
      </h2>

      <form className='login-form'>
        <div className='login-form__wrapper'>
          {FIELDS.length > 0 && (
            FIELDS.map(({ label, name, type }) => (
              <div className='login-form__group' key={name}>
                <label
                  htmlFor={name}
                  className='login-form__label'
                >
                  {label}
                </label>

                <input
                  className='login-form__input'
                  placeholder={label}
                  id={name}
                  type={type}
                  name={name}
                  value={values[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))
          )}
        </div>

        <button
          type='submit'
          className='login-form__button'
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
