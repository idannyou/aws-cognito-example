import React, { Fragment } from 'react';
import { compose, withStateHandlers } from 'recompose';
import { Auth } from 'aws-amplify';

import Routes from './Routes';
import Header from './Header';

const handleAuthentication = async ({
  type,
  email,
  password,
  confirmationCode
}) => {
  let payload;
  try {
    switch (type) {
      case 'sign_in':
        payload = await Auth.signIn(email, password);
        console.log({ payload });
        return true;
      case 'sign_up':
        payload = await Auth.signUp(email, password);
        console.log({ payload });
        return true;
      case 'confirmation':
        let confirmPayload = await Auth.confirmSignUp(email, confirmationCode);
        payload = await Auth.signIn(email, password);
        console.log({ confirmPayload, payload });
        return true;
    }
  } catch (e) {
    alert(e.message || e);
    return false;
  }
};

const initialState = {
  login: {
    email: '',
    password: '',
    confirmationCode: ''
  },
  activeTab: '',
  authenticated: false
};

const stateHandlers = {
  onChangeLogin: state => ({ type, event }) => {
    return {
      ...state,
      login: {
        ...state.login,
        [type]: event.target && event.target.value
      }
    };
  },
  onClickLogin: state => type => {
    const { email, password, confirmationCode } = state.login;
    const authenticated = handleAuthentication({
      email,
      password,
      confirmationCode,
      type
    });
    return {
      ...state,
      authenticated
    };
  },
  setActive: state => activeTab => {
    return {
      ...state,
      activeTab: activeTab
    };
  }
};

const App = props => {
  return (
    <Fragment>
      <Header props={props} />
      <Routes props={props} />
    </Fragment>
  );
};

export default compose(withStateHandlers(initialState, stateHandlers))(App);
