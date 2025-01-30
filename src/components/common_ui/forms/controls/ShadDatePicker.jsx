"use client"

import * as React from "react"
import { format, parse } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Field, ErrorMessage } from "formik"
import { TextError } from "./TextError"

export default function ShadDatePicker({ name, label, required, ...rest }) {

	return (
		<div>
			<Field name={name}>
				{({ form, field }) => {
					const { setFieldValue } = form
					const { value } = field
					return (
						<Popover>
							<PopoverTrigger asChild>
								<div>
									<label
										htmlFor={name}
										className="block text-sm font-medium text-gray-700"
										className={`${required && "required"}`}
									>
										{label}
									</label>
									<Button
										variant={"outline"}
										className={cn(
											"w-[280px] justify-start text-left font-normal",
											!value && "text-muted-foreground"
										)}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{value ? (
											format(value, "MM-dd-yyyy")
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</div>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									id={name}
									{...field}
									{...rest}
									selected={value}
									onSelect={(val) =>
										setFieldValue(name, format(val, "MM-dd-yyyy"))
									}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					)
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	)
}
