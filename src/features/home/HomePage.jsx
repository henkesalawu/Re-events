import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react'

function HomePage() {
    
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
        <Container>
        <Header as='h1' inverted >
            <Image size='massive' src='/assets/mermaidlogo.png' style={{marginBottom: 12}} />
            Re-events
        </Header>
        <Button as={Link} to='/events' size='huge' inverted>
            Get started
            <Icon name='right arrow' inverted />
        </Button>
        </Container>
    </Segment>
  )
}

export default HomePage
