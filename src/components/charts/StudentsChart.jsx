"use client"
import Image from "next/image"
import React from "react"
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from "recharts"

const data = [
	{
		name: "Girls",
		count: 1134,
		fill: "#FAE17B",
	},
	{
		name: "Boys",
		count: 1234,
		fill: "#c3eBFA",
	},
	{
		name: "Total",
		count: 2368,
		fill: "white",
	},
]

const StudentsChart = () => {
	return (
		<div className="border-2 bg-white rounded-lg border-gray-500/20 flex flex-col justify-center  min-h-[250px] lg:w-1/3 p-y-5 ">
			<div className="flex justify-between items-center p-2">
				<div className="font-bold ">Students</div>
				<div>
					<Image src="/images/moreDark.png" width={20} height={20} alt="more" />
				</div>
			</div>
			<div className="w-full h-[70%] relative">
				<ResponsiveContainer>
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="60%"
						outerRadius="150%"
						barSize={15}
						data={data}
					>
						<RadialBar minAngle={15} background clockWise dataKey="count" />
					</RadialBarChart>
				</ResponsiveContainer>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Image src="/images/maleFemale.png" width={40} height={40} alt="students" />
				</div>
			</div>

			<div className="flex justify-center gap-x-5 items-center">
				<div className="flex flex-col gap-1">
					<div className="w-3 h-3 rounded-full bg-heavenSky"> </div>
					<div className="font-bold text-[.8rem]">1,234</div>
					<div className="font-bold text-sm text-heavenSky">Boys</div>
				</div>
				<div className="flex flex-col gap-1">
					<div className="w-3 h-3 rounded-full bg-heavenYellow"> </div>
					<div className="font-bold text-[.8rem]">1,134</div>
					<div className="font-bold text-sm text-heavenYellow">Girls</div>
				</div>
			</div>
		</div>
	)
}

export default StudentsChart
