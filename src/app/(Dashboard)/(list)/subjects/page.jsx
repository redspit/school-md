"use client"
import TableList from "@/components/common_ui/list_table"
import FormModel from "@/components/Models/FormModel"
import { role, subjectsData } from "@/lib/data"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const subjectsColumns = [
    {
        header: "Subject",
        accessor: "name",
        className: ""
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: ""

    },
]
const SubjectsList = () => {
    return (
			<TableList title="All Subjects" columns={subjectsColumns}>
				{subjectsData.map((cell) => (
					<TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
						<TableCell className="font-medium">{cell.name}</TableCell>

						<TableCell className="font-medium">
							{cell.teachers.join(", ")}
						</TableCell>
						<TableCell className="font-medium flex gap-2">
							<button className="px-2 py-2 rounded-full bg-heavenSky">
								<Image src="/images/view.png" width={15} height={15} alt="" />
							</button>
							{role === "admin" && (
								<>
									<FormModel requester="teacher" request="update" data={cell} />
									<FormModel requester="teacher" request="delete" data={cell} />
								</>
							)}
						</TableCell>
					</TableRow>
				))}
			</TableList>
		)
}

export default SubjectsList