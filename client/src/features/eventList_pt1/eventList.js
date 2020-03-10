import React from 'react';

const EventList = ({ events }) => {
  return events ? (
    <div>
      {events.map(event => {
        return (
          <div key={event.EventId}>
            <div>
              <p>
                {event.VenueCity}, {event.VenueCountry}
              </p>
              <p>{event.Date}</p>
              <p>{event.Time}</p>
            </div>

            <div>
              <p>{event.VenueName}</p>
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
