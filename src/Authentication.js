import React from 'react';
import {
  Button,
  Box,
  Card,
  Flex,
  FlexList,
  Header,
  Input,
  Menu
} from '@procore/core-react';

const onChangeInput = ({ type, onChangeLogin }) => event => {
  event.persist();
  onChangeLogin({ type, event });
};

const onClickButton = ({ type, onClickLogin }) => _ => {
  onClickLogin(type);
};

const Authentication = ({ routeProps, props: { props } }) => {
  const { confirmationCode, email, password } = props.login;
  const { activeTab, onClickLogin, onChangeLogin } = props;
  return (
    <Flex alignItems="center" justifyContent="center" direction="column">
      <Card style={{ width: '300px' }}>
        <Menu>
          <Flex
            alignItems="center"
            justifyContent="center"
            direction="column"
            style={{
              width: '100%'
            }}
          >
            <Box margin="lg">
              <Header type="h3">Email</Header>
              <Input
                placeholder="Email"
                value={email}
                onChange={onChangeInput({ type: 'email', onChangeLogin })}
              />
            </Box>
            <Box margin="md">
              <Header type="h3">Password</Header>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangeInput({ type: 'password', onChangeLogin })}
              />
            </Box>

            <Menu.Divider />

            <Box margin="md">
              <FlexList size="xs" justifyContent="center">
                {activeTab === 'sign_in' && (
                  <Button
                    onClick={onClickButton({ type: 'sign_in', onClickLogin })}
                  >
                    Sign In
                  </Button>
                )}
                {activeTab === 'sign_up' && (
                  <Button
                    onClick={onClickButton({ type: 'sign_up', onClickLogin })}
                  >
                    Sign Up
                  </Button>
                )}
              </FlexList>
            </Box>

            <Menu.Divider />

            {activeTab === 'sign_up' && (
              <Flex
                alignItems="center"
                justifyContent="center"
                direction="column"
                style={{ width: '100%' }}
              >
                <Box margin="sm">
                  <Input
                    placeholder="Verification Code"
                    value={confirmationCode}
                    onChange={onChangeInput({
                      type: 'confirmationCode',
                      onChangeLogin
                    })}
                  />
                </Box>
                <Box margin="sm">
                  <Button
                    onClick={onClickButton({
                      type: 'confirmation',
                      onClickLogin
                    })}
                  >
                    {'Confirm Code'}
                  </Button>
                </Box>
              </Flex>
            )}
          </Flex>
        </Menu>
      </Card>
    </Flex>
  );
};

export default Authentication;
