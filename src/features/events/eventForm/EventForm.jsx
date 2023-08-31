import cuid from 'cuid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Header, Segment, Container } from 'semantic-ui-react';
import { updateEvent, createEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';

function EventForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const selectedEvent = useSelector(state => 
        state.event.events.find(e => e.id === id))

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('You must provide a title'),
        category: Yup.string().required('You must provide a category'),
        description: Yup.string().required('You must provide a description'),
        city: Yup.string().required('You must provide a city'),
        venue: Yup.string().required('You must provide a venue'),
        date: Yup.string().required('You must provide a date')
    })

    
  return (
    <Container className='main'>
    <Segment clearing>
        <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            selectedEvent 
        ? dispatch(updateEvent({...selectedEvent, ...values})) 
        : dispatch(createEvent({
            ...values, 
            id: cuid(), 
            hostedBy: 'Bob', 
            attendees: [], 
            hostPhotoURL: '/assets/user.png'
        }));
        navigate('/events'); 
        }}
        validationSchema={validationSchema}
        >
            <Form className='ui form'>
            <Header sub color='teal' content='Event Details'/>
            <MyTextInput name='title' placeholder='Event title' />
            <MyTextInput name='category' placeholder='Category'/>
            <MyTextInput name='description' placeholder='Description'/>
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput name='city' placeholder='City'/>
            <MyTextInput name='venue' placeholder='Venue'/>
            <MyTextInput name='date' placeholder='Event Date' type='date'/>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button type='submit' floated='right'  content='Cancel' as={Link} to='/events' />
        </Form>
        </Formik>
    </Segment>
    </Container>
  );
}

export default EventForm;
