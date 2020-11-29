import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import swal from 'sweetalert';
import moment from 'moment';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const getEvents = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/events`
      });
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, [isUpdated]);

  const handleEventDelete = async (eventId) => {
    try {
      setIsUpdated(!isUpdated);
      await axios.delete(`/api/events/${eventId}`);
      swal('Event deleted', { icon: 'success' });
    } catch (error) {
      swal('Operation failed', { icon: 'error' });
    }
  };
  return (
    <div
      className="bg-dark-gray flex flex-col items-center"
      style={{ marginTop: '4rem' }}
    >
      {events.map((event1) => {
        return (
          <div class="flex flex-col items-center w-full">
            <div
              className="flex p-2 m-4 w-7/12 justify-center my-event-card"
              style={{
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                backgroundColor: '#FFF7F1',
                marginBottom: '.4rem',
                borderLeft: '8px solid #A6271F'
              }}
            >
              <div className="p-2 m-2 flex flex-col items-center w-full h-56 mb-6 ml-36">
                <h2 className="dash-h2 text-3xl">{event1?.eventTitle}</h2>
                <br />
                <span class="text-2xl">
                  {moment(event1?.eventDate).format('MMMM Do YYYY')}
                </span>
                <br />
                <span
                  class="text-2xl semibold"
                  style={
                    event1?.hasBeenOpened
                      ? { color: 'green', fontWeight: '600' }
                      : { color: 'red', fontWeight: '600' }
                  }
                >
                  {event1?.hasBeenOpened ? 'Opened by Artist' : 'Not Opened'}
                </span>
                <br />
              </div>
              <div className="text-center justify-center m-3 p-2 w-1/3"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MyEvents;
