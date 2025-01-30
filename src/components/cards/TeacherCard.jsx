"use client"
import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import Link from "next/link"
import {useRouter} from 'next/navigation'
export const TeacherCard = () => {
	const [teachers, setTeachers] = useState([])
	const [hidden, setHidden] = useState(true)
	const router = useRouter()

	const getData = () => {
		axios
			.get("http://localhost:3000/api/teacher")
			.then((res) => setTeachers(res.data))
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5 mx-1">
			{teachers.map((teacher) => (
				// <Link href={`/test/${teacher.id}`} key={teacher.id}>
				<div
					key={teacher.id}
					className="border-2 border-heavenPurple p-3 rounded-lg bg-heavenSkyLight hover:bg-opacity-50 flex flex-col gap-1"
				>
					<div className=" ">Name: {teacher.username}</div>
					<div className=" ">Email: {teacher.email}</div>
					<button
						className="py-1 px-2 border rounded-md bg-heavenPurple w-[50%]"
						onClick={() => router.push(`/test/${teacher.id}`)}
					>
						Show More
					</button>
				</div>
				// </Link>
			))}
		</div>
	)
}
