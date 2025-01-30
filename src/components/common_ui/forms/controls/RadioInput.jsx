import React from "react"
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"


const RadioInput = ({ label, name, required, options, ...rest }) => {
	return (
		<div className="flex flex-col justify-between gap-2">
			<div className="flex items-center justify-between">
				<label className={`${required && "required"}`}>{label}</label>
				<div className="flex space-x-2">
					<Field name={name} className="">
						{({ field }) => {
							return options.map((option) => {
								return (
									<div key={option.key} className="space-x-1">
										<input
											type="radio"
											id={option.value}
											{...field}
											value={option.value}
											checked={field.value === option.value}
										/>
										<label htmlFor={option.value}>{option.key}</label>
									</div>
								)
							})
						}}
					</Field>
				</div>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}

export default RadioInput
