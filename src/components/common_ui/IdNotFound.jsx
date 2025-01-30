import React from 'react'

const IdNotFound = ({label}) => {
  return (
		<div className="h-full flex justify-center items-center text-xl font-roboto font-bold">
			<span className=" shadow-md shadow-heavenYellow">
				No {label} with this ID was found
			</span>
		</div>
	)
}

export default IdNotFound