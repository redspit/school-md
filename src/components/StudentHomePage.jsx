"use client"
import RightPane from "@/components/right_pane/right_pane"
import React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"

import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"

moment.locale("en-US")
const localizer = momentLocalizer(moment)

const StudentHomePage = () => {
	return (
		<div className="flex-1 flex justify-between lg:flex-row flex-col gap-2 overflow-auto">
			<div className="flex-1 rounded-lg bg-white p-2 min-h-[500px]">
				<Calendar
					localizer={localizer}
					events={calendarEvents}
					startAccessor="start"
					endAccessor="end"
					defaultView={"work_week"}
					views={["work_week","day"]}
					min={new Date(2024,0,1,8,0,0)}
					max={new Date(2026,0,1,17,0,0)}
				/>
			</div>
			<div className="lg:w-1/3 bg-transparnet rounded-md flex flex-col">
				<RightPane />
			</div>
		</div>
	)
}
export default StudentHomePage
