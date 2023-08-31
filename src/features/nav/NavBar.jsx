import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

function NavBar({setFormOpen}) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);

  function handleSignOut() {
    setAuthenticated(false);
    navigate('/');
  }

  return (
    <Menu inverted fixed='top'>
    <Container>
      <Menu.Item as={NavLink} exact to='/' header>
        <img src="/assets/logo.png" alt='logo' style={{marginRight: 15}}/>
        Re-events
      </Menu.Item>
      <Menu.Item as={NavLink} to='/events' name='Events'/>
      <Menu.Item as={NavLink} to='/sandbox' name='Sandbox'/>
      {authenticated &&
      <Menu.Item as={NavLink} to='/createEvent'>
        <Button positive inverted content='Create Event' />
      </Menu.Item> }
      {authenticated 
      ? <SignedInMenu 
      setAuthenticated={setAuthenticated}
      signOut={handleSignOut}
      /> 
      : <SignedOutMenu setAuthenticated={setAuthenticated}/>}
    </Container>

    </Menu>
  )
}

export default NavBar
