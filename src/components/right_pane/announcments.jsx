"use client"
import AnnouncementCard from '@/components/cards/Announcement_card'
import { announcementsData } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const Announcements = () => {
const newAnnouncementsData = announcementsData.slice(0,3)
  return (
		<div className="bg-white rounded-lg px-3 motion-translate-x-in-[100%] motion-translate-y-in-[0%]">
			<div className="flex justify-between items-center">
				<div className="text-lead text-[1.1rem] font-bold mt-4 mb-2">
					Announcements
				</div>
				<div className="text-gray-400 text-lead-3 font-normal text-xs">
					<Link href="/list/announcements">View All</Link>
				</div>
			</div>

			{newAnnouncementsData.map((item) => (
				<AnnouncementCard
					title={item.title}
					date={item.date}
					key={item.id}
					className=""
				>
					The<span className="font-bold text-green-500 px-1">{item.class}</span>
					class will conducted in the 8:00 o'clock
				</AnnouncementCard>
			))}
		</div>
	)
}

export default Announcements