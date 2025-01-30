import React from 'react'
import Image from "next/image"

const NotFound = () => {
  return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
				<Image
					src="/images/notfound_1.png"
					width={1500}
					height={1500}
					alt="not found image"
					className="object-fill"
				/>
			</div>
		</div>
	)
}

export default NotFound