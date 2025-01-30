"use client"
import TableList from "@/components/common_ui/list_table"
import { role, announcementsData } from "@/lib/data"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const announcementsColumns = [
    {
        header: "Title",
        accessor: "title",
        className: ""
    },
    {
        header: "Class",
        accessor: "class",
        className: "md:table-cell hidden"

    },
    {
        header: "Date",
        accessor: "date",
        className: "md:table-cell hidden"
    },

]
const AnnouncementsList = () => {
    return (
			<TableList title="All Announcements" columns={announcementsColumns}>
				{announcementsData.map((cell) => (
					<TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
						<TableCell className="font-medium">{cell.title}</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.class}
						</TableCell>
						<TableCell className="font-medium md:table-cell hidden">
							{cell.date}
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

export default AnnouncementsList