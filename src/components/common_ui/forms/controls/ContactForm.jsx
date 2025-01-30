import React from 'react'
import {  Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"

const ContactForm = ({ name, label, required, contact, ...rest }) => {
	return (
		<div className="border p-3 w-full flex flex-col  justify-between gap-1">
			<div className={`${required && "required"} font-bold`}>{label}</div>
			<div className="flex items-center justify-between gap-2">
				<label htmlFor={contact.name}>{contact.name}</label>
				<Field
					type="text"
					id={contact.name}
					name={contact.name}
					className="outline-none border-2 border-black rounded-lg p-2 "
				/>
			</div>
			<ErrorMessage name={contact.name} component={TextError} />

			<div className="flex items-center justify-between gap-2">
				<label htmlFor={contact.phone}>Phone</label>
				<Field
					type="text"
					id={contact.phone}
					name={contact.phone}
					className="outline-none border-2 border-black rounded-lg p-2 "
				/>
			</div>
			<ErrorMessage name={contact.phone} component={TextError} />
		</div>
	)
}

export default ContactForm