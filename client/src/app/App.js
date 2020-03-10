import React, { useState } from 'react';
import { json } from '../shared/data.js';

function App() {
  const [event, updateEvents] = useState(json.Items);

  return (
    <div>
      <h1>Elton John Listings</h1>
    </div>
  );
}

export default App;
