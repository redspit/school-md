"use client"
import TableList from "@/components/common_ui/list_table"
import FormModel from "@/components/Models/FormModel"
import { role, parentsData } from "@/lib/data"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const parentsColumns = [
    {
        header: "Info",
        accessor: "info",
        className: ""
    },
    {
        header: "Students",
        accessor: "students",
        className: ""

    },
    {
        header: "Phone",
        accessor: "phone",
        className: "md:table-cell hidden"
    },
    {
        header: "Address",
        accessor: "address",
        className: "md:table-cell hidden"
    },

]
const ParentsList = () => {
    return (
			<TableList title="All Parents" columns={parentsColumns}>
				{parentsData.map((cell) => (
					<TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
						<TableCell className="font-medium">
							<div className="flex flex-col">
								<div className="text-sm font-bold">{cell.name}</div>
								<div className="text-xs">{cell.email}</div>
							</div>
						</TableCell>

						<TableCell className="font-medium">
							{cell.students.join(", ")}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.phone}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.address}
						</TableCell>
						<TableCell className="font-medium flex gap-2">
							<button className="px-2 py-2 rounded-full bg-heavenSky">
								<Image src="/images/view.png" width={15} height={15} alt="" />
							</button>
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

export default ParentsList