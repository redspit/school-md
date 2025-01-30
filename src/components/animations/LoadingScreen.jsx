// components/Loading.js
"use client"

import React from "react"
import Lottie from "lottie-react"
import animationData from "../../../public/loading.json"

const LoadingScreen = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Lottie animationData={animationData} loop={true} />
		</div>
	)
}

export default LoadingScreen
