import React, { Component } from 'react';
import { Box, Button, Flex, Input, Link } from '@procore/core-react';
import { Auth } from 'aws-amplify';
class App extends Component {
  state = {
    confirmationCode: '',
    email: '',
    password: '',
    signInMode: true
  };

  onChangeText = state => event => {
    this.setState({
      [state]: event.target.value
    });
  };

  toggleMode = () => {
    this.setState({
      signInMode: !this.state.signInMode
    });
  };

  triggerAction = action => async event => {
    const { confirmationCode, email, password } = this.state;
    event.preventDefault();
    try {
      await Auth.signIn(this.state.email, this.state.password);
      alert('Logged in');
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const { confirmationCode, email, password, signInMode } = this.state;
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        style={{ width: '100%' }}
      >
        <Flex alignContent="space-between">
          <Box margin="sm">
            <Link onClick={this.toggleMode}>
              {signInMode ? 'Sign Up' : 'Sign In'}
            </Link>
          </Box>
        </Flex>

        <Box margin="lg">
          <Input
            placeholder="Email"
            value={email}
            onChange={this.onChangeText('email')}
          />
        </Box>
        <Box margin="lg">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangeText('password')}
          />
        </Box>
        <Button onClick={this.triggerAction('Sign')}>
          {signInMode ? 'Sign In' : 'Sign Up'}
        </Button>
        {!signInMode && (
          <Flex
            alignItems="center"
            justifyContent="center"
            direction="column"
            style={{ width: '100%' }}
          >
            <Box margin="lg">
              <Input
                placeholder="Verification Code"
                value={confirmationCode}
                onChange={this.onChangeText('confirmationCode')}
              />
            </Box>
            <Button onClick={this.triggerAction('Confirm Code')}>
              {'Confirm Code'}
            </Button>
          </Flex>
        )}
      </Flex>
    );
  }
}

export default App;
