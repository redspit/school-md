import React from 'react'
import Image from "next/image"
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik"
import { TextError } from "./TextError"


const FancyInput = ({ label, required, icon, name, ...rest }) => {
	return (
		<div className="flex items-center justify-between gap-2">
			<label htmlFor={name} className={`${required && 'required'}`}>{label}</label>
			<Field name={name} id={name}>
				{({ field, form, meta }) => {
					return (
						<div className="flex flex-col">
							<div className="flex rounded-lg border border-gray-400 px-2 py-4  items-center h-[20px] space-x-2 text-sm text-gray-500">
								{icon && <Image src={icon} width={15} height={15} alt="icon" />}
								<input
									type="text"
									{...field}
									id={name}
									name={name}
									className="bg-transparent border-0 ring-0 outline-none"
									placeholder={label}
								/>
							</div>
							<ErrorMessage name={name} component={TextError} />
						</div>
					)
				}}
			</Field>
		</div>
	)
}

export default FancyInput