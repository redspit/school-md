import React from "react"
import Image from "next/image"
const ProfileCard = ({
	photo,
	name,
	description,
	subjects,
	grade,
	startDate,
	email,
	phone,
}) => {
	return (
		<div className="min-w-[50%] rounded-md py-2 px-3 bg-heavenSky flex items-center gap-5 font-roboto">
				<Image
					src={photo}
					width={100}
					height={100}
					alt="avatar"
					className="min-w-[100px] h-[100px] rounded-full overflow-hidden object-fill"
				/>

			<div className="flex flex-col gap-1 pr-12 ">
				<div className="font-bold text-violet-900">{name}</div>
				<div className="text-xs text-gray-600">{description}</div>
				<div className="flex justify-between items-center text-xs font-bold">
					{subjects && (
						<div className="">
							Subjects:
							{subjects.map((subject) => (
								<span key={subject} className="text-violet-900">
									{` ${subject}`}
								</span>
							))}
						</div>
					)}
					{grade && <div className="">Grade: {grade}</div>}
					<div className="">{startDate}</div>
				</div>
				<div className="flex justify-between items-center text-xs font-bold">
					<div className="">{email}</div>
					<div className="">{phone}</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCard
