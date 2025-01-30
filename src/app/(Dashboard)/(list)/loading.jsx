"use client"
import React from "react"
import dynamic from "next/dynamic"

// Dynamically import the Loading component
const LoadingScreen = dynamic(
	() => import("@/components/animations/LoadingScreen"),
	{ ssr: false }
)

const Home = () => {
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		// Simulate a network request or some async operation
		setTimeout(() => {
			setLoading(false)
		}, 3000) // 3 seconds
	}, [])

	return (
		<div>{loading ? <LoadingScreen /> : <h1>Welcome to the Home Page</h1>}</div>
	)
}

export default Home
