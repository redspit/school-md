import React from 'react'
import { SimpleForm} from "@/components/models/SimpleForm"
import { TeacherCard } from "@/components/cards/TeacherCard"

const TestPage = () => {
	
  return (
		<div className="flex-1 mt-5 flex flex-col justify-center items-center ">
			<SimpleForm />
			<TeacherCard />
		</div>
	)
}

export default TestPage