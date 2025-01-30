import React from 'react'

const AnnouncementCard = ({ title, children, date, color, className }) => {
	return (
		<div
			className={`border-2 border-t-4 rounded-lg p-4 text-lead-2 flex flex-col gap-2 mb-2 even:bg-heavenSkyLight odd:bg-heavenPurpleLight ${className}`}
			style={{ backgroundColor: color }}
		>
			<div className="flex justify-between items-center">
				<div className="text-gray-800 text-lead-3 font-bold text-[.8rem]">
					{title}
				</div>
				<div className="text-gray-400 text-lead-3 font-bold text-[.7rem] bg-white p-1 rounded-md">
					{date}
				</div>
			</div>
			<div className="text-gray-400 text-lead-3 font-normal text-xs">
				{children}
			</div>
		</div>
	)
}

export default AnnouncementCard