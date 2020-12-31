import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import events from '../../data/events';
import { useState } from 'react';

moment.locale("en");
const localizer = momentLocalizer(moment);
const propTypes = {}

function Scheduler() {
    var [data, setData] = useState(events);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title) {
            setData([...data, { start, end, title }]);
        }
    }

    const handleOnView = viewNameString => {
        if (viewNameString === "agenda") {
            console.log(arguments)
        }
    }

    return <Calendar
        selectable
        localizer={localizer}
        events={data}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelect}
        onView={handleOnView}
    />

}

Scheduler.propTypes = propTypes

export default Scheduler