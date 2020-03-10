import React, { useState } from 'react';
import EventList from '../features/eventList_pt1/EventList.js';

import { json } from '../shared/data.js';

function App() {
  const [events, updateEvents] = useState(json.Items);

  return (
    <div>
      <h1>Elton John Listings</h1>
      <EventList events={events} />
    </div>
  );
}

export default App;
