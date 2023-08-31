import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function SignedOutMenu({setAuthenticated}) {
  return (
    <div>
      <Menu.Item position='right'>
        <Button onClick={() => setAuthenticated(true)} as={NavLink} to='/login' position='right' basic inverted content='Login' />
        <Button as={NavLink} to='/register' basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
      </Menu.Item>
    </div>
  )
}

export default SignedOutMenu;
