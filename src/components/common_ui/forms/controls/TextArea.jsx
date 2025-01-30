import React from 'react'
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"

export const TextArea = ({ label, name, required, ...rest }) => {
  return (
		<div className="flex flex-col justify-between gap-2">
			<div className="flex items-center justify-between gap-2">
				<label htmlFor={name} className={`${required && "required"}`}>
					{label}
				</label>
				<Field
					as="textarea"
					name={name}
					id={name}
					autoComplete="true"
					className="rounded-lg border border-gray-400 px-2 py-4  items-center min-h-[60px] text-sm text-gray-500"
				/>
			</div>
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}

export default TextArea