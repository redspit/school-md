"use client"
import TableList from "@/components/common_ui/list_table"
import FormModel from "@/components/Models/FormModel"
import { role, studentsData } from "@/lib/data"
import React from 'react'
import {
	TableCell,
	TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Link from 'next/link';

const studentsColumns = [
	{
		header: "Info",
		accessor: "info",
		className: ""
	},
	{
		header: "Student Id",
		accessor: "studentId",
		className: "md:table-cell hidden"

	},
	{
		header: "Grade",
		accessor: "grade",
		className: "sm:table-cell hidden"

	},
	{
		header: "Class",
		accessor: "class",
		className: "md:table-cell hidden"
	},
	{
		header: "Phone",
		accessor: "phone",
		className: "lg:table-cell hidden"
	},
	{
		header: "Address",
		accessor: "address",
		className: "xl:table-cell hidden"
	},

]
const StudentsList = () => {
	return (
		<TableList title="All Students" columns={studentsColumns}>
			{studentsData.map((cell) => (
				<TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
					<TableCell className="font-medium">
						<div className="flex items-center gap-2">
							<Image
								src={cell.photo}
								width={50}
								height={50}
								alt="avatar"
								className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
							/>

							<div className="flex flex-col">
								<div className="text-sm font-bold">{cell.name}</div>
								<div className="text-xs">{cell.email}</div>
							</div>
						</div>
					</TableCell>
					<TableCell className="font-medium md:table-cell hidden">
						{cell.studentId}
					</TableCell>
					<TableCell className="font-medium sm:table-cell hidden">
						{cell.grade}
					</TableCell>
					<TableCell className="font-medium md:table-cell hidden">
						{cell.class}
					</TableCell>
					<TableCell className="font-medium lg:table-cell hidden">
						{cell.phone}
					</TableCell>
					<TableCell className="font-medium xl:table-cell hidden">
						{cell.address}
					</TableCell>
					<TableCell className="font-medium flex gap-2">
						<Link href={`/students/${cell.studentId}`}>
							<div className="px-2 py-2 rounded-full bg-heavenSky">
								<Image src="/images/view.png" width={15} height={15} alt="" />
							</div>
						</Link>
						{role === "admin" && (
							<>
								<FormModel requester="student" request="update" data={cell} />
								<FormModel requester="student" request="delete" data={cell} />
							</>
						)}
					</TableCell>
				</TableRow>
			))}
		</TableList>
	)
}

export default StudentsList