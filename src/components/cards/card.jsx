import Image from 'next/image'
import React from 'react'

const Card = ({ color, date, number, label, className}) => {
  return (
		<div
			className={`flex-1 h-[100] rounded-lg text-[.6rem] px-2 py-2 space-y-3 even:bg-heavenPurple odd:bg-heavenYellow ${className}`}
			style={color ? { backgroundColor: color } : null}
		>
			<div className="flex justify-between">
				<div className="w-1/2 bg-white rounded-lg text-green-500 py-1 text-center">
					{date}
				</div>
				<div>
					<Image src="/images/more.png" width={20} height={20} alt="more" />
				</div>
			</div>
			<div className="text-black text-xl font-bold">{number}</div>
			<div className="text-gray-500/80 text-xs font-bold capitalize">
				{label}
			</div>
		</div>
	)
}

export default Card