import React from 'react';
import styles from './EventList.css';

const EventList = ({ events }) => {
  const { container, row, col1, col2 } = styles;
  return events ? (
    <div className={container}>
      {events.map(event => {
        return (
          <div className={row} key={event.EventId}>
            <div className={col1}>
              <span>{event.Date}</span>
              <span>{event.Time}</span>
            </div>

            <div className={col2}>
              <span>
                {event.VenueName}, {event.VenueCity}, {event.VenueCountry}
              </span>
              <span>{event.VenueCapacity}</span>
              <span>{event.EventName}</span>
              <span>{event.MinPrice}</span>
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
