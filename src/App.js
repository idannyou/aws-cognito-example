import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, ToolHeader } from '@procore/core-react';

import Routes from './Routes';

class App extends Component {
  state = {
    active: ''
  };

  isActive = tab => {
    return tab === this.state.active;
  };

  setActive = active => () => {
    this.setState({ active });
  };

  render() {
    return (
      <Fragment>
        <ToolHeader>
          <ToolHeader.Title>AWS Cognito</ToolHeader.Title>
          <ToolHeader.Tabs>
            <Tabs>
              <Tabs.Tab
                active={this.isActive('sign_in')}
                onClick={this.setActive('sign_in')}
              >
                <Tabs.Link>
                  <Link to="sign_in">Sign In</Link>
                </Tabs.Link>
              </Tabs.Tab>
              <Tabs.Tab
                active={this.isActive('sign_up')}
                onClick={this.setActive('sign_up')}
              >
                <Tabs.Link>
                  <Link to="sign_up">Sign Up</Link>
                </Tabs.Link>
              </Tabs.Tab>
            </Tabs>
          </ToolHeader.Tabs>
        </ToolHeader>
        <Routes active={this.state.active} />
      </Fragment>
    );
  }
}

export default App;
