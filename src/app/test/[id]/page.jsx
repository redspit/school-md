"use client"
import React, { useState, useEffect, useCallback, use } from "react"
import axios from "axios"

const TeacherProfile = ({params}) => {
		const {id} = use(params)
    	const [teachers, setTeachers] = useState()

			const getData = () => {
				 axios
					.get(`http://localhost:3000/api/teacher/${id}`)
					.then((res) => setTeachers(res.data))
			}
			useEffect(() => {
				getData()
			}, [id])
  return (
		<div className="flex justify-center items-center h-screen">
			{teachers &&
				teachers.map((teacher) => (
					<div className="border-2 border-heavenPurple p-3 rounded-lg bg-heavenSkyLight hover:bg-opacity-50 flex flex-col gap-1" key={teacher.id}>
						<div className=" ">Name: {teacher.username}</div>
						<div className=" ">Email: {teacher.email}</div>
						<div className="">
							<div className=" ">Bio: {teacher.bio}</div>
							<div className=" ">Address: {teacher.address}</div>
							<div className=" ">
								Phones:
								{teacher.phones &&
									teacher.phones.map((phone, index) => (
										<div
											className="border border-heavenYellow px-5"
											key={index}
										>
											<div className=" ">
												Phone #{index + 1}: {phone}
											</div>
										</div>
									))}
							</div>
							{teacher.contact && (
								<>
									<div className=" ">Contact Name: {teacher.contact.name}</div>
									<div className=" ">
										Contact Phone:: {teacher.contact.phone}
									</div>
								</>
							)}
						</div>
					</div>
				))}
		</div>
	)
}

export default TeacherProfile