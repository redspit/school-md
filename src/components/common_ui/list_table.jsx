import React,{ useState} from "react"
import PaginationComponent from "@/components/common_ui/pagination"
import Image from "next/image"
import SearchBar from "@/components/search"
import FormModel from '@/components/Models/FormModel';
import TeacherForm from '@/components/models/TeacherForm';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TableList = ({ title, columns, children, request, requester }) => {
	const [value, setValue] = useState("")
	return (
		<div className="flex-1 flex-col bg-white rounded-lg px-3 py-2">
			<div className="flex justify-center md:justify-between ">
				<div className="font-bold hidden md:block">{title}</div>
				<div className="flex items-end gap-3 flex-col md:flex-row md:items-center">
					<SearchBar  />

					<div className="flex items-center gap-3">
						<button className="px-2 py-2 rounded-full bg-heavenYellow">
							<Image src="/images/filter.png" width={15} height={15} alt="" />
						</button>
						<button className="px-2 py-2 rounded-full bg-heavenYellow">
							<Image src="/images/sort.png" width={15} height={15} alt="" />
						</button>
						<FormModel requester request="create" />
					</div>
				</div>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						{columns.map((column) => (
							<TableHead className={column.className} key={column.accessor}>
								<div className={column.className}>{column.header}</div>
							</TableHead>
						))}
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="">{children}</TableBody>
			</Table>
			<PaginationComponent />
		</div>
	)
}

export default TableList

