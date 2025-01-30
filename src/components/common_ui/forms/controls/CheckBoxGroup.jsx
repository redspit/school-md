import React from "react"
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"

const CheckBoxGroup = ({ label, name, required, options, ...rest }) => {
	return (
		<div className="flex flex-col justify-between gap-2">
			<div className="flex items-center justify-between">
				<label className={`${required && "required"}`}>{label}</label>
				<div className="grid grid-cols-2 gap-2 rounded-lg p-2 border border-gray-400 text-sm">
					<Field name={name} className="">
						{({ field }) => {
							return options.map((option) => {
								return (
									<div key={option.key} className="space-x-1">
										<input
											type="checkbox"
											id={option.value}
											{...field}
											value={option.value}
											checked={field.value.includes(option.value)}
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

export default CheckBoxGroup
