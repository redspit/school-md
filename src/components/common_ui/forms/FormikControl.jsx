import React from "react"
import {
	Input,
	FancyInput,
	TextArea,
	Select,
	RadioInput,
	CheckBoxGroup,
	DatePicker,
	ShadDatePicker,
	ListInput,
	ContactForm,
} from "./controls/"

const FormikControl = ({ control, ...rest }) => {
	switch (control) {
		case "Input":
			return <Input {...rest} />
		case "FancyInput":
			return <FancyInput {...rest} />
		case "TextArea":
			return <TextArea {...rest} />
		case "Select":
			return <Select {...rest} />
		case "RadioInput":
			return <RadioInput {...rest} />
		case "CheckBoxGroup":
			return <CheckBoxGroup {...rest} />
		case "DatePicker":
			return <DatePicker {...rest} />
		case "ShadDatePicker":
			return <ShadDatePicker {...rest} />
		case "ListInput":
			return <ListInput {...rest} />
		case "ContactForm":
			return <ContactForm {...rest} />
		default:
			return null
	}
}

export default FormikControl
