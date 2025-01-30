import React from 'react'
import MainForm from "@/components/common_ui/forms/MainForm"
import { TeacherCard } from "@/components/cards/TeacherCard"


const TestPage = () => {
  return (
		<div className="flex-1 mt-5 flex flex-col justify-center items-center ">
			<MainForm />
			<TeacherCard />
		</div>
	)
}

export default TestPage