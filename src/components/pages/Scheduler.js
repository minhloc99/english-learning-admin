import React, { useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import events from '../../data/events';
import "./Scheduler.css";
import ExecutedLessonForm from '../section/ExecutedLessonForm';

moment.locale("en");
const localizer = momentLocalizer(moment);
const propTypes = {}

function Scheduler() {
    var [data, setData] = useState(events);

    const handleSelect = (slotInfo) => {
        const title = window.prompt('New Event name')
        if (title) {
            setData([...data, { start: slotInfo.start, end: slotInfo.end, title }]);
        }
    }

    const handleOnView = viewNameString => {
        if (viewNameString === "agenda") {
            console.log(arguments)
        }
    }

    return <div className="scheduler__wrapper">
        <Calendar
            selectable
            localizer={localizer}
            events={[]}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={handleSelect}
            onView={handleOnView}
        />
        <ExecutedLessonForm />
    </div>
}

Scheduler.propTypes = propTypes

export default Scheduler