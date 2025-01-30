"use client"
import Image from "next/image"
import React from "react"
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"

const data = [
	{
		name: "Mon",
		Absent: 75,
		Present: 85,
		amt: 100,
	},
	{
		name: "Tues",
		Absent: 50,
		Present: 25,
		amt: 100,
	},
	{
		name: "Wends",
		Absent: 75,
		Present: 50,
		amt: 100,
	},
	{
		name: "Fri",
		Absent: 59,
		Present: 54,
		amt: 100,
	},
	{
		name: "Sat",
		Absent: 55,
		Present: 55,
		amt: 100,
	},
]

const AttendanceChart = () => {
	return (
		<div className="lg:w-2/3 border-2 border-black bg-white rounded-lg border-gray-500/20 flex flex-col justify-center min-h-[200px] flex-1">
			<div className="flex justify-between items-center p-2">
				<div className="font-bold ">Attendance</div>
				<div>
					<Image src="/images/moreDark.png" width={20} height={20} alt="more" />
				</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={600}
					height={100}
					data={data}
					margin={{
						top: 5,
						right: 20,
						left: 5,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend
						align="left"
						verticalAlign="top"
						wrapperStyle={{ paddingBottom: "10px" }}
					/>
					<Bar
						dataKey="Present"
						fill="#FAE17B"
						activeBar={<Rectangle fill="gold" stroke="purple" />}
						legendType="circle"
					/>
					<Bar
						dataKey="Absent"
						fill="#c3eBFA"
						activeBar={<Rectangle fill="pink" stroke="blue" />}
						legendType="circle"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default AttendanceChart
