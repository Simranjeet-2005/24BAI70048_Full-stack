import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function CalendarComponent() {

  const [events, setEvents] =useState([
    {
      id:"1",
      title:"Instagram Post",
      date:"2026-07-10"
    },
    {
      id:"2",
      title:"LinkedIn Post",
      date:"2026-07-16"
    }
  ]);

  const handleDateClick=(info)=>{

    const title=prompt("Enter Post Title");

    if(title){

      setEvents([
        ...events,
        {
          id:String(events.length+1),
          title,
          date:info.dateStr
        }
      ]);

    }

  }

  return(

    <FullCalendar

      plugins={[dayGridPlugin,interactionPlugin]}

      initialView="dayGridMonth"

      height="500px"

      editable={true}

      selectable={true}

      events={events}

      dateClick={handleDateClick}

      headerToolbar={{
        left:"prev,next today",
        center:"title",
        right:"dayGridMonth"
      }}

    />

  );

}

export default CalendarComponent;