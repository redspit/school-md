import Image from "next/image"
import React from "react"
import {role} from '@/lib/data' 
const HeaderAccount = () => {
    const iconSize = 20
    const avatarSize = 30
	return (
		<div className="flex justify-end gap-8">
			<div className="">
				<Image
					src={"/images/message.png"}
					width={iconSize}
					height={iconSize}
					alt="message"
				/>
			</div>
			<div className="relative">
				<Image
					src="/images/announcement.png"
					width={iconSize}
					height={iconSize}
					alt="message"
				/>
				<div className="w-[20px] h-[20px] absolute -top-4 -right-3 rounded-full bg-purple-500 text-center text-xs text-white ">
					+9
				</div>
			</div>
			<span className="text-sm">
				<div className="font-bold leading-3">John Doe</div>
				<div className="text-xs text-end font-thick text-gray-500/80">
					{role}
				</div>
			</span>
			<div className="">
				<Image
					src="/images/avatar.png"
					width={avatarSize}
					height={avatarSize}
					alt="message"
					className="rounded-full"
				/>
			</div>
		</div>
	)
}

export default HeaderAccount
