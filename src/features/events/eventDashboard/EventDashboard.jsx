import React, { useState } from 'react'
import {Grid, Container } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import { useSelector } from 'react-redux';

export default function EventDashboard() {
//getting events from event object thats in store
//get events directly from store
  const {events} = useSelector(state => state.event)

  return (
    <Container className='main'>
    <Grid>
        <Grid.Column width={10}>
            <EventList 
            events={events} 
            />
        </Grid.Column>
        <Grid.Column width={6}>
        <h2>Event filters</h2>
        </Grid.Column>
    </Grid>
    </Container>
  )
}


