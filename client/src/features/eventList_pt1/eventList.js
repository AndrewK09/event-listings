import React from 'react';
import styles from './EventList.css';

const EventList = ({ events }) => {
  const { container, row } = styles;
  return events ? (
    <div className={container}>
      {events.map(event => {
        return (
          <div className={row} key={event.EventId}>
            <div>
              <p>{event.Date}</p>
              <p>{event.Time}</p>
            </div>

            <div>
              <p>
                {event.VenueName}, {event.VenueCity}, {event.VenueCountry}
              </p>
              <p>{event.VenueCapacity}</p>
              <p>{event.EventName}</p>
              <p>{event.MinPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default EventList;
