import React, { Component } from 'react';
import { Box, Button, Flex, Input, Link } from '@procore/core-react';

class App extends Component {
  state = {
    confirmationCode: '',
    userName: '',
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

  triggerAction = action => () => {
    const { confirmationCode, userName, password } = this.state;

    console.log(`triggered ${action}`, confirmationCode, userName, password);
  };

  render() {
    const { confirmationCode, userName, password, signInMode } = this.state;
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
            placeholder="User Name"
            value={userName}
            onChange={this.onChangeText('userName')}
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
