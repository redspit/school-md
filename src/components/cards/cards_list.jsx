import Card from '@/components/cards/card'
import { parentsData, studentsData, teachersData } from '@/lib/data'
import React from 'react'

const CardList = () => {
  return (
		// <div className="flex justify-between flex-wrap gap-3">
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex gap-3">
			<Card
				color="rgb(250,225,123)"
				date="2024/25"
				number={studentsData.length}
				label="students"
				className="motion-translate-x-in-[-1%] motion-translate-y-in-[-102%]"
			/>
			<Card
				// color="rgb(43,206,254)"
				date="2024/25"
				number={teachersData.length}
				label="Teachers"
				className="motion-translate-x-in-[-1%] motion-translate-y-in-[-102%] motion-delay-[100ms]"
			/>
			<Card
				// color="rgb(250,225,123)"
				date="2024/25"
				number={parentsData.length}
				label="Parents"
				className="motion-translate-x-in-[-1%] motion-translate-y-in-[-102%] motion-delay-[50ms]"
			/>
			<Card
				color="rgb(206,206,254)"
				date="2024/25"
				number="1,123"
				label="Staffs"
				className="motion-translate-x-in-[-1%] motion-translate-y-in-[-102%] motion-delay-[200ms]"
			/>
		</div>
	)
}

export default CardList