import React from 'react'

const exams = () => {
  return (
		<div className="flex md:justify-center md:items-center md:flex-row flex-col gap-2">
			<div className="border-2 border-gray-500/20 bg-white rounded-md  flex px-24 py-5  flex-col h-[300px] md:left-20 relative">
				<div>PLAN A</div>
			</div>
			<div className="border border-blue-500  rounded-md  flex px-10 py-5 flex-col h-[330px] md:shadow-lg shadow-blue-500 bg-white relative md:left-10 left-0">
				Recommanded Plan
			</div>
			<div className=" relative"></div>
			<div className="border-2 border-gray-500/20 bg-white rounded-md flex px-24 py-5 flex-col h-[300px] ">
				PLAN B
			</div>
			
		</div>
	)
}

export default exams