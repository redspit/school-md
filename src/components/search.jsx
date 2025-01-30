import Image from 'next/image'
import React from 'react'

const SearchBar = ({ value, onChange }) => {
	return (
		<div className="flex rounded-full border border-gray-400 w-[250px] px-2 py-4  items-center h-[20px] space-x-2 text-sm text-gray-500">
			<Image
				src="/images/search.png"
				width={15}
				height={15}
				alt="search icon"
			/>
			<input
				type="text"
				className="bg-transparent border-0 ring-0 outline-none"
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default SearchBar