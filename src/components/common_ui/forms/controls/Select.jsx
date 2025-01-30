import React from 'react'
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"

const Select = ({label, name, required, options, ...rest}) => {
  return (
		<div className="flex flex-col justify-between gap-2">
			<div className="flex items-center justify-between gap-2">
				<label htmlFor={name} className={`${required && "required"}`}>
					{label}
				</label>
				<Field
					as="select"
					id={name}
					name={name}
					{...rest}
					autoComplete="true"
					className="rounded-lg border border-gray-400 px-2 py-4  items-center text-sm "
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.key}
						</option>
					))}
				</Field>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}

export default Select