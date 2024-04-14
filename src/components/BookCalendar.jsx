import { useState } from "react";
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs';


const BookCalendar = ({object}) => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      title: 'Test',
      start: dayjs('2024-3-23T8:30').toDate(),
      end: dayjs('2024-3-23T15:30').toDate()
    }
  ]


  return (
    <>
      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={events}
        />
        
      </div>
    </>
  );
}

export default BookCalendar;