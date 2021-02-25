import React from 'react';
import FieldText from '../../components/FieldText/FieldText';
import FieldCheckbox from '../../components/FieldCheckbox/FieldCheckbox';

import './LandingPage.scss';

function LandingPage() {
  return (
    <div className='login-page'>
      <form action='#' className='login-form'>
        <h1 className='login-form__title'>Log in</h1>
        <span className='login-form__subtitle'>
          If you don't have an account yet, please{' '}
          <a href='#' className='link link--blue'>
            register
          </a>{' '}
          first.
        </span>

        <div className='login-form__fields'>
          <FieldText inputArguments={{ type: 'email', name: 'user-email', placeholder: 'Your e-mail' }} />
          <FieldText
            inputArguments={{ type: 'password', name: 'user-password', placeholder: 'Your password' }}
          />
        </div>

        <a href='#' className='login-form__forgot-link link link--gray'>
          I forgot my password
        </a>

        <FieldCheckbox inputArguments={{ name: 'remember-me' }} name='Remember me' />

        <button type='submit' className='btn login-form__submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
