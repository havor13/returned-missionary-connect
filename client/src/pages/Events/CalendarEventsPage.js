// client/src/pages/Events/CalendarEventsPage.js
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/CalendarEventsPage.css";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

function CalendarEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => {
        // Map backend events into calendar format
        const formatted = res.data.map(event => ({
          title: event.title,
          start: new Date(event.date),
          end: new Date(event.date), // single-day events
          allDay: true,
          resource: event, // keep original data
        }));
        setEvents(formatted);
      })
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Events Calendar</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          views={["month", "week", "day"]}
          popup
        />
      </div>
    </div>
  );
}

export default CalendarEventsPage;
