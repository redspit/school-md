import localFont from "next/font/local";
import {Roboto} from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const robotoFont = Roboto({
	subsets: ["latin"],
	weight: ["100", "400"],
	variable: "--font-roboto",
})

export const metadata = {
	title: "School Managment System",
	description: "School Managment System",
}

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${robotoFont.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
