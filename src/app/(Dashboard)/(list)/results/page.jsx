"use client"
import TableList from "@/components/common_ui/list_table"
import { role, resultsData } from "@/lib/data"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const resultsColumns = [
    {
        header: "Subject",
        accessor: "subject",
        className: ""
    },
    {
        header: "Class",
        accessor: "class",
        className: "md:table-cell hidden"

    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "md:table-cell hidden"
    },
    {
        header: "Student",
        accessor: "student",
        className: "md:table-cell hidden"
    },
    {
        header: "Date",
        accessor: "date",
        className: "md:table-cell hidden"
    },
    {
        header: "Type",
        accessor: "type",
        className: "md:table-cell hidden"
    },
    {
        header: "Score",
        accessor: "score",
        className: "md:table-cell hidden"
    },

]
const ResultList = () => {
    return (
        <TableList title="All Results" columns={resultsColumns} >
            {resultsData.map((cell) => (
                <TableRow key={cell.id} className="h-[70px] text-sm even:bg-gray-200">
                    <TableCell className="font-medium">{cell.subject}</TableCell>
                    <TableCell className="font-medium md:table-cell hidden">{cell.class}</TableCell>
                    <TableCell className="font-medium md:table-cell hidden">{cell.teacher}</TableCell>
                    <TableCell className="font-medium md:table-cell hidden">{cell.student}</TableCell>
                    <TableCell className="font-medium md:table-cell hidden">{cell.date}</TableCell>
                    <TableCell className="font-medium md:table-cell hidden">{cell.type}</TableCell>
                    <TableCell className="font-medium md:table-cell hidden">{cell.score}</TableCell>
                    <TableCell className="font-medium flex gap-2">
                        <button className="px-2 py-2 rounded-full bg-heavenSky">
                            <Image src="/view.png" width={15} height={15} alt="" />
                        </button>
                        {role === "admin" && (

                            <button className="px-2 py-2 rounded-full bg-heavenPurple">
                                <Image src="/delete.png" width={15} height={15} alt="" />
                            </button>
                        )}
                    </TableCell>
                </TableRow>
            ))}
        </TableList>

    )
}

export default ResultList