import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';

import config from './config';

Amplify.configure({
  // Auth is Cognito
  Auth: {
    mandatorySignIn: true, //this forces our user to sign in before interacting with app
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
  // API: {
  //   endpoints: [
  //     {
  //       name: "",
  //       endpoint: config.apiGateway.URL,
  //       region: config.apiGateway.REGION
  //     },
  //   ]
  // }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
