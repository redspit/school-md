import React from 'react'
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"

const DatePicker = ({name, label, required, ...rest}) => {
  return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm font-medium text-gray-700"
				className={`${required && "required"}`}
			>
				{label}
			</label>
			<Field
				type="date"
				id={name}
				name={name}
				placeholder={`Enter ${label}`}
				className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}

export default DatePicker