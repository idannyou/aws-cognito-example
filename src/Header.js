import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, ToolHeader } from '@procore/core-react';

const setActiveTab = ({ activeTab, setActive }) => _ => {
  setActive(activeTab);
};

const Header = props => {
  const { activeTab, setActive } = props.props;
  return (
    <ToolHeader>
      <ToolHeader.Title>AWS Cognito</ToolHeader.Title>
      <ToolHeader.Tabs>
        <Tabs>
          <Tabs.Tab
            active={activeTab === 'sign_in'}
            onClick={setActiveTab({ activeTab: 'sign_in', setActive })}
          >
            <Tabs.Link>
              <Link to="sign_in">Sign In</Link>
            </Tabs.Link>
          </Tabs.Tab>
          <Tabs.Tab
            active={activeTab === 'sign_up'}
            onClick={setActiveTab({ activeTab: 'sign_up', setActive })}
          >
            <Tabs.Link>
              <Link to="sign_up">Sign Up</Link>
            </Tabs.Link>
          </Tabs.Tab>
        </Tabs>
      </ToolHeader.Tabs>
    </ToolHeader>
  );
};

export default Header;
