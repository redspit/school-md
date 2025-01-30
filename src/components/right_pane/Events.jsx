"use client"
import EventCard from "@/components/cards/event_card"
import { eventsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useMemo } from "react"
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"


const Events = () => {
	const [date, setDate] = useState(new Date());
 const [isMounted, setIsMounted] = useState(false)

 useEffect(() => {
		setIsMounted(true)
 }, [])

 if (!isMounted) {
		return null
 }
	const formatDate = () => {
		const chosenDate = date === undefined? new Date() : date
			const year = chosenDate.getFullYear()
			const month = (chosenDate.getMonth() + 1).toString().padStart(2, "0")
			const day = chosenDate.getDate().toString().padStart(2, "0")
			return `${year}-${month}-${day}`

	}
	const newEvents = eventsData.filter(
		(item) => item.date ==  formatDate()).slice(0,3)
	
	return (
		<div className="bg-white rounded-lg p-3 flex flex-col flex-1 motion-translate-x-in-[100%] motion-translate-y-in-[0%]">
			<Calendar mode="single" value={date} onChange={setDate} />
			<div className="flex justify-between items-center">
				<div className="text-lead text-[1.1rem] font-bold mt-4 mb-2">
					Events
				</div>
				<div>
					<Link href="/list/events">
						<Image
							src="/images/moreDark.png"
							width={20}
							height={20}
							alt="more"
						/>
					</Link>
				</div>
			</div>
			{newEvents.map((item) => (
				<EventCard title={item.title} date={item.date} key={item.id}>
					The
					<span className="text-green-400 px-1 font-bold">{item.title}</span>
					event for
					<span className="text-green-400 px-1 font-bold">{item.class}</span>
					will be held from
					<span className="text-red-400 px-1 font-bold">{item.startTime}</span>
					until
					<span className="text-red-400 px-1 font-bold">{item.endTime}</span>
				</EventCard>
			))}
		</div>
	)
}

export default Events
