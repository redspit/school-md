import React from "react"
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"
const Input = ({ label, name, ...rest }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center justify-between gap-2">
				<label htmlFor={name} className={`${required && "required"}`}>
					{label}
				</label>
				<Field
					type="text"
					id={name}
					name={name}
					className="outline-none border-2 border-black rounded-lg p-2"
					{...rest}
				/>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}

export default Input
