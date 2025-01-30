import React from 'react'

const EventCard = ({title, date, children}) => {
  return (
		<div className="border-2 border-t-4 odd:border-t-heavenSky even:border-t-heavenPurple rounded-lg p-4 text-lead-2 flex flex-col gap-2 mb-2">
			<div className="w-full flex justify-between">
				<div className="text-gray-800 text-lead-3 font-bold text-sm">
					{title}
				</div>
				<div className="text-gray-400 text-lead-3 font-bold text-xs">
					{date}
				</div>
			</div>
			<div className="text-gray-400 text-lead-3 font-normal text-xs">
				{children}
			</div>
		</div>
	)
}

export default EventCard