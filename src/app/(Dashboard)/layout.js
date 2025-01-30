import localFont from "next/font/local"
import "../globals.css"
import Logo from "@/components/logo"
import TopHeader from "@/components/header"
import LeftPane from "@/components/left_pane"


const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata = {
	title: "School Dashboard",
	description: "School Dashboard for ",
}

export default function DashboardLayout({ children }) {
	return (
		<div className="h-screen w-screen flex">
			{/* left */}
			<div className="h-full w-[14%] md:w-[8%] lg:w-[18%] xl:w-[14%] bg-white">
				<Logo />
				<LeftPane />
			</div>
			{/* RIGHT */}
			<div className="h-full w-[86%] md:w-[92%] lg:w-[82%] xl:w-[86%] bg-gray-300/30 overflow-scroll px-3 py-6">
				<TopHeader />
				{children}
			</div>
		</div>
	)
}
