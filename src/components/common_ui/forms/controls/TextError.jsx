import React from 'react'
import Image from "next/image"

export const TextError = ({ children }) => {
	return (
		<div className="flex items-center justify-center gap-1">
			<div className="w-[15px] h-[15px]">
				<Image src="/cross.png" width={15} height={15} alt="search icon" />
			</div>
			<div className="text-sm text-red-500">{children}</div>
		</div>
	)
}