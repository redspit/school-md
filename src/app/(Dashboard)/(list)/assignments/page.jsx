"use client"
import TableList from "@/components/common_ui/list_table"
import { role, assignmentsData } from "@/lib/data"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const assignmentsColumns = [
    {
        header: "Subject",
        accessor: "subject",
        className: ""
    },
    {
        header: "Class",
        accessor: "class",
        className: ""

    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "md:table-cell hidden"
    },
    {
        header: "Due Date",
        accessor: "dueDate",
        className: "md:table-cell hidden"
    },

]
const AssignmentsList = () => {
    return (
			<TableList title="All Assignments" columns={assignmentsColumns}>
				{assignmentsData.map((cell) => (
					<TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
						<TableCell className="font-medium">{cell.subject}</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.class}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.teacher}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.dueDate}
						</TableCell>
						<TableCell className="font-medium flex gap-2">
							<button className="px-2 py-2 rounded-full bg-heavenSky">
								<Image src="/images/view.png" width={15} height={15} alt="" />
							</button>
							{role === "admin" && (
								<button className="px-2 py-2 rounded-full bg-heavenPurple">
									<Image
										src="/images/delete.png"
										width={15}
										height={15}
										alt=""
									/>
								</button>
							)}
						</TableCell>
					</TableRow>
				))}
			</TableList>
		)
}

export default AssignmentsList