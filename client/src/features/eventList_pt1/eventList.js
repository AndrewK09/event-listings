import React from 'react';
import {
  container,
  row,
  col1,
  col2,
  col3,
  col4,
  isSellingFast,
  isNotSellingFast,
  isCheapestCity,
  isNotCheapestCity,
} from './EventList.css';

const EventList = ({ events }) => {
  return events ? (
    <div className={container}>
      {events.map(event => {
        return (
          <div className={row} key={event.EventId}>
            <div className={col1}>
              <span>{event.Date}</span>
              <span>{event.Time}</span>
              <span
                className={
                  event.IsSellingFast ? isSellingFast : isNotSellingFast
                }
              >
                Tickets Selling Fast!!
              </span>
            </div>

            <div className={col2}>
              <span>
                {event.VenueName}, {event.VenueCity}, {event.VenueCountry}
              </span>
              <span>Venue Capacity: {event.VenueCapacity}</span>
              <span>{event.EventName}</span>
              <span
                className={
                  event.IsCheapestCity ? isCheapestCity : isNotCheapestCity
                }
              >
                {event.IsCheapestCityContent}
              </span>
            </div>

            <div className={col3}>
              <span>{event.AvailableTickets}</span>
            </div>

            <div className={col4}>
              {event.IsSoldOut ? (
                <span>Sold Out</span>
              ) : (
                <span>{event.MinPrice}</span>
              )}
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
