import React from 'react'

const DeleteModel = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
		<div className="flex justify-center items-center z-50 fixed top-0 left-0 bg-white rounded-lg w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] pb-4">
			<form action="" className="p-4 flex flex-col gap-4">
				<span className="text-center font-medium">
					All data will be lost. Are you sure you want to delete
					<span className="text-heavenRed font-bold">"{data.name}"</span>?
				</span>
				<button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
					Delete
				</button>
			</form>
		</div>
	)
}

export default DeleteModel