import React from 'react';
import {
  container,
  row,
  col1,
  col2,
  col3,
  col4,
  displayGreenText,
  displayAlertText,
  hideText,
} from './EventList.css';

import { militaryToRegular } from '../../shared/helpers.js';

const EventList = ({ events }) => {
  return events ? (
    <div className={container}>
      {events.map(event => {
        return (
          <div className={row} key={event.EventId}>
            <div className={col1}>
              <span>
                {event.Day}, {event.Date}
              </span>
              <span>{militaryToRegular(event.Time)}</span>
              <span
                className={event.IsSellingFast ? displayAlertText : hideText}
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
                className={event.IsCheapestCity ? displayGreenText : hideText}
              >
                {event.IsCheapestCityContent}
              </span>
            </div>

            <div className={col3}>
              <span
                className={
                  event.AvailableTickets < 600 ? displayAlertText : hideText
                }
              >
                {event.AvailableTickets} tickets remaining
              </span>
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
