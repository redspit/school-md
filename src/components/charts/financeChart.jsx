"use client"
import Image from "next/image"
import React, { PureComponent } from "react"
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	ResponsiveContainer,
} from "recharts"

const data = [
	{
		name: "Jan",
		Funds: 4000,
		expenses: 2400,
		amt: 2400,
	},
	{
		name: "Feb",
		Funds: 3000,
		expenses: 1398,
		amt: 2210,
	},
	{
		name: "Mar",
		Funds: 2000,
		expenses: 9800,
		amt: 2290,
	},
	{
		name: "Apr",
		Funds: 2780,
		expenses: 3908,
		amt: 2000,
	},
	{
		name: "May",
		Funds: 1890,
		expenses: 4800,
		amt: 2181,
	},
	{
		name: "Jun",
		Funds: 2390,
		expenses: 3800,
		amt: 2500,
	},
	{
		name: "Jul",
		Funds: 3490,
		expenses: 4300,
		amt: 2100,
	},
	{
		name: "Aug",
		Funds: 3490,
		expenses: 4300,
		amt: 2100,
	},
	{
		name: "Sep",
		Funds: 3490,
		expenses: 4300,
		amt: 2100,
	},
	{
		name: "Oct",
		Funds: 3490,
		expenses: 4300,
		amt: 2100,
	},
	{
		name: "Nov",
		Funds: 3490,
		expenses: 4300,
		amt: 2100,
	},
	{
		name: "Dec",
		Funds: 3490,
		expenses: 4300,
		amt: 2100,
	},
]
const FinanaceChart = () => {
	return (
		<div className="w-full border-2 border-black bg-white rounded-lg border-gray-500/20 flex flex-col justify-center h-[300px]">
			<div className="flex justify-between items-center p-2">
				<div className="font-bold ">Finanace</div>
				<div>
					<Image src="/images/moreDark.png" width={20} height={20} alt="more" />
				</div>
			</div>

			<ResponsiveContainer width="100%" height="100%">
				<LineChart width={500} height={300} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="expenses"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="Funds" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
export default FinanaceChart
