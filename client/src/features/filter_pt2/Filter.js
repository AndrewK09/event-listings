import React, { useState } from 'react';
import { json } from '../../shared/data.js';
import { Container } from './Filter.css';

//converts list of events to list of event cities
const eventCities = json.Items.map(event => {
  return event.VenueCity;
});

const Filter = props => {
  const [selected, updateSelected] = useState('All Cities');

  //Update selected value and  updates list of events
  const handleSelect = e => {
    const city = e.target.value;
    updateSelected(city);
    filterEventsByCity(city);
  };

  const filterEventsByCity = city => {
    let filteredEvents;

    if (city === 'All Cities') {
      filteredEvents = json.Items;
    } else {
      filteredEvents = json.Items.filter(event => {
        return event.VenueCity === city;
      });
    }

    props.updateEvents(filteredEvents);
  };

  return (
    <form className={Container}>
      <label>Search By Location:</label>

      <select value={selected} onChange={handleSelect}>
        <option value='All Cities'>All Cities</option>

        {eventCities.map((city, i) => {
          return (
            <option value={city} key={i}>
              {city}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Filter;
