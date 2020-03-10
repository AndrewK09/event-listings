import React, { useState } from 'react';
import EventList from '../features/eventList_pt1/EventList.js';
import Filter from '../features/filter_pt2/Filter.js';

import styles from './App.css';
import { json } from '../shared/data.js';

function App() {
  const [events, updateEvents] = useState(json.Items);

  const { MainContainer, Title } = styles;
  return (
    <div className={MainContainer}>
      <h1 className={Title}>Elton John Listings</h1>
      <Filter updateEvents={updateEvents} />
      <EventList events={events} />
    </div>
  );
}

export default App;
