import React from "react"
import Image from "next/image"
import Link from "next/link"
import { role } from "@/lib/data"

const menuItems = [
	{
		title: "MENU",
		items: [
			{
				icon: "/images/home.png",
				label: "Home",
				href: `/${role}`,
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/teacher.png",
				label: "Teachers",
				href: "/teachers",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/images/student.png",
				label: "Students",
				href: "/students",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/images/parent.png",
				label: "Parents",
				href: "/parents",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/images/subject.png",
				label: "Subjects",
				href: "/subjects",
				visible: ["admin"],
			},
			{
				icon: "/images/class.png",
				label: "Classes",
				href: "/classes",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/images/lesson.png",
				label: "Lessons",
				href: "/lessons",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/images/exam.png",
				label: "Exams",
				href: "/exams",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/assignment.png",
				label: "Assignments",
				href: "/assignments",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/result.png",
				label: "Results",
				href: "/results",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/attendance.png",
				label: "Attendance",
				href: "/attendance",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/calendar.png",
				label: "Events",
				href: "/events",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/message.png",
				label: "Messages",
				href: "/messages",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/announcement.png",
				label: "Announcements",
				href: "/announcements",
				visible: ["admin", "teacher", "student", "parent"],
			},
		],
	},
	{
		title: "OTHER",
		items: [
			{
				icon: "/images/profile.png",
				label: "Profile",
				href: "/profile",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/setting.png",
				label: "Settings",
				href: "/settings",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/images/logout.png",
				label: "Logout",
				href: "/logout",
				visible: ["admin", "teacher", "student", "parent"],
			},
		],
	},
]
const LeftPane = () => {
	return (
		<div className="mt-4 text-sm">
			{menuItems.map((menuItem) => (
				<div className="flex flex-col gap-2" key={menuItem.title}>
					<span className="hidden lg:block text-gray-400 font-light my-4 px-3">
						{menuItem.title}
					</span>
					{menuItem.items.map((item) => {
						if (item.visible.includes(role)) {
							return (
								<Link
									href={item.href}
									key={item.label}
									className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-3 rounded-md hover:bg-lamaSkyLight hover:bg-heavenSkyLight"
								>
									<Image src={item.icon} alt="" width={20} height={20} />
									<span className="hidden lg:block">{item.label}</span>
								</Link>
							)
						}
					})}
				</div>
			))}
		</div>
	)
}

export default LeftPane