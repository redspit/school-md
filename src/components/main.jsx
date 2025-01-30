"use client"
import AttendanceChart from "@/components/charts/attendanceChart"
import CardList from "@/components/cards/cards_list"
import React from "react"
import StudentChart from "@/components/charts/StudentsChart"
import RightPane from "@/components/right_pane/right_pane"
import FinanaceChart from "@/components/charts/financeChart"

const HomeBoard = () => {
	return (
		<div className="flex-1 flex justify-between md:flex-row flex-col gap-2 overflow-auto">
			<div className="lg:w-2/3 w-full flex flex-col gap-2">
				<CardList />
				<div className="w-full flex flex-col lg:flex-row gap-2">

						<StudentChart />
						<AttendanceChart />
				
				</div>
					<FinanaceChart />
				
			</div>
			<div className="lg:w-1/3 flex-1 bg-transparnet rounded-md flex flex-col">
			<RightPane />
			</div>
		</div>
	)
}

export default HomeBoard
