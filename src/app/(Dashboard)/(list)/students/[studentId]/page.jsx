"use client"
import React,{ use, useEffect, useState} from "react"
import Announcements from "@/components/right_pane/announcments"
import Image from "next/image"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import { role, studentsData } from "@/lib/data"

import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"
import ProfileCard from '@/components/cards/ProfileCard'
import StatCard from '@/components/cards/StatCard'
import dynamic from "next/dynamic"
import IdNotFound from "@/components/common_ui/IdNotFound"
moment.locale("en-US")
const localizer = momentLocalizer(moment)


const LoadingScreen = dynamic(
	() => import("@/components/animations/LoadingScreen"),
	{ ssr: false }
)


const SingleStudentPage = ({params}) => {
		const { studentId } = use(params)
	const [student, setStudent] = useState(null)
	
useEffect(()=>{
	setStudent(studentsData.find((t) => t.studentId === studentId))
},[])
	if(student === null) return <LoadingScreen />
	if (student === undefined) return <IdNotFound label="student" />

	return (
		<div className="flex-1 flex justify-between md:flex-row flex-col gap-2 overflow-auto">
			<div className="md:w-2/3 w-full flex flex-col gap-2">
				<div className="w-full flex flex-col xl:flex-row gap-2">
					<ProfileCard
						name={student.name}
						description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum.consectetur adipisicing elit."
						grade={student.grade}
						startDate="January 2025"
						email={student.email}
						phone={student.phone}
						photo={student.photo}
					/>

					<div className="w-full grid grid-cols-2 gap-2">
						<StatCard
							icon="/images/singleAttendance.png"
							stat="25"
							label="Attendance"
						/>
						<StatCard
							icon="/images/singleBranch.png"
							stat="90%"
							label="Branches"
						/>
						<StatCard
							icon="/images/singleLesson.png"
							stat="50"
							label="Lessons"
						/>
						<StatCard icon="/images/singleClass.png" stat="6" label="Classes" />
					</div>
				</div>
				{/* CALANDER */}
				<div className="flex-1 rounded-md bg-white p-2 min-h-[500px]">
					<div className="font-bold text-sm py-2">Student's Schedule</div>
					<Calendar
						localizer={localizer}
						events={calendarEvents}
						startAccessor="start"
						endAccessor="end"
						defaultView={"work_week"}
						views={["work_week", "day"]}
						min={new Date(2024, 0, 1, 8, 0, 0)}
						max={new Date(2026, 0, 1, 17, 0, 0)}
					/>
				</div>
			</div>
			{/* RIGHT PANE */}
			<div className="md:w-1/3 flex-1 bg-transparnet rounded-md flex flex-col gap-2">
				<div className="bg-white rounded-lg p-3">
					<div className="font-bold pb-2">Shortcuts</div>
					<div className="flex flex-wrap gap-1 text-[.7rem]">
						<div className="bg-heavenSkyLight rounded-lg p-2">
							Student's Classes
						</div>
						<div className="bg-heavenPurpleLight rounded-lg p-2">
							Student's Students
						</div>
						<div className="bg-heavenYellowLight rounded-lg p-2">
							Student's Lessons
						</div>
						<div className="bg-red-100 rounded-lg p-2">Student's Exams</div>
						<div className="bg-purple-100 rounded-lg p-2">
							Student's Assignmrnts
						</div>
					</div>
				</div>
				<div className="bg-white rounded-lg p-3">
					<div className="flex justify-between">
						<div className="font-bold pb-2">Performance</div>
						<div>
							<Image
								src="/images/moreDark.png"
								width={20}
								height={20}
								alt="more"
							/>
						</div>
					</div>
					<div className="p-5 flex flex-col justify-center items-center">
						<div className="font-bold text-lg">9.2</div>
						<div className="text-gray-300 text-xs mb-5">of 10 max LTS</div>
						<div className="font-bold text-sm">1st Semester - 2nd Semester</div>
					</div>
				</div>
				<Announcements />
			</div>
		</div>
	)
}

export default SingleStudentPage
