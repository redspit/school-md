import React from "react"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
	return (
		<Link
			href="/"
			className={`flex py-4 space-x-1 items-center px-3 lg:justify-center lg:px-0 text-[1.1rem] font-roboto`}
		>
			<Image
				className=""
				src="/images/logo.png"
				width={30}
				height={30}
				alt="i"
			/>
			<span className="hidden lg:block font-[900]">SchooLama</span>
		</Link>
	)
}
export default Logo
