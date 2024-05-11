import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs';


const BookCalendar = ({object}) => {
  const localizer = dayjsLocalizer(dayjs);



  return (
    <>
      <div className="calendar">
        <Calendar
          localizer={localizer}
        />
        
      </div>
    </>
  );
}

export default BookCalendar;