"use client"
import TableList from "@/components/common_ui/list_table"
import { role, classesData } from "@/lib/data"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const classesColumns = [
    {
        header: "Class",
        accessor: "name",
        className: ""
    },
    {
        header: "Capacity",
        accessor: "capacity",
        className: ""

    },
    {
        header: "grade",
        accessor: "Grade",
        className: "md:table-cell hidden"
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "md:table-cell hidden"
    },

]
const ClassesList = () => {
    return (
			<TableList title="All Classes" columns={classesColumns}>
				{classesData.map((cell) => (
					<TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
						<TableCell className="font-medium">{cell.name}</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.capacity}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.grade}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.supervisor}
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

export default ClassesList