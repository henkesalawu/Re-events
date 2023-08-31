import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandox/Sandbox';

function App() {
  const {key, pathname} = useLocation();

  return (
    <>
    {pathname !== '/' && <NavBar />}
    <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='/events' element={<EventDashboard />}/>
    <Route path='/sandbox' element={<Sandbox/>}/>

    <Route path='/events/:id' element={<EventDetailedPage/>}/>
    <Route path='/createEvent' element={<EventForm/>}/>
    <Route path='/manage/:id' element={<EventForm/>} key={key}/>    
    </Routes>
   </>
  );
}

export default App;
