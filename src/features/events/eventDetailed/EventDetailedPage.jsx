import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function EventDetailedPage({match}) {
  const {id} = useParams();
  
  //events is an array, use fidn array metthod
  const event = useSelector(state => state.event.events.find(e => e.id === id))
  return (
    <Container className='main'>
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}/>
        <EventDetailedInfo event={event}/>
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
      <EventDetailedSidebar attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
    </Container>
  )
}

export default EventDetailedPage;
