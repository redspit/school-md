"use client"
import React from "react"
import FormikContainer from "./FormikContainer"
import FormikControl from "./FormikControl"
const MainForm = () => {
	return (
		<FormikContainer className="flex flex-col gap-2">
			<FormikControl
				control="FancyInput"
				name="username"
				label="User Name"
				required
				type="text"
				icon="/images/user.png"
			/>
			<FormikControl
				control="FancyInput"
				name="password"
				label="Password"
				required
				type="password"
				icon="/images/password.png"
			/>
			<FormikControl
				control="FancyInput"
				name="repassword"
				label="Confirm Password"
				required
				type="password"
				icon="/images/password.png"
			/>
			<FormikControl
				control="FancyInput"
				name="email"
				label="Email"
				required
				type="email"
				icon="/images/email.png"
			/>
			<FormikControl control="TextArea" name="bio" label="Bio" />
			<FormikControl
				control="Select"
				name="nationality"
				label="Nationality"
				options={[
					{ key: "Select a nationality", value: "" },
					{ key: "American", value: "American" },
					{ key: "Saudi", value: "Saudi" },
					{ key: "British", value: "British" },
				]}
			/>
			<FormikControl
				control="FancyInput"
				name="address"
				label="Address"
				type="text"
				icon="/images/location.png"
			/>

			<FormikControl
				control="FancyInput"
				name="zipCode"
				label="Zip Code"
				required
				type="text"
				icon="/images/location.png"
			/>

			<FormikControl
				control="RadioInput"
				name="gender"
				label="Gender"
				required
				options={[
					{ key: "Male", value: "Male" },
					{ key: "Female", value: "Female" },
				]}
			/>
			<FormikControl
				control="CheckBoxGroup"
				name="role"
				label="Role"
				required
				options={[
					{ key: "Admin", value: "Admin" },
					{ key: "Stuff", value: "Stuff" },
					{ key: "Supervisor", value: "Supervisor" },
					{ key: "Moderator", value: "Moderator" },
				]}
			/>
			<FormikControl
				control="DatePicker"
				name="birthday"
				label="Birthday"
				required
			/>
			<FormikControl
				control="ListInput"
				name="phones"
				label="Phones"
				required
			/>
			<FormikControl
				control="ContactForm"
				name="conatact"
				label="Conatact"
				contact={{ name: "contact.name", phone: "contact.phone" }}
			/>
		</FormikContainer>
	)
}

export default MainForm
