import React from 'react'
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik"
import { TextError } from "./TextError"

const ListInput = ({name, label, required, ...rest}) => {
  return (
		<div className="border p-3 w-full flex flex-col justify-between gap-2 rounded-lg">
			<FieldArray type="text" id="primaryPhone" name="phones">
				{({ push, remove, form }) => {
					const { phones } = form.values
					return (
						<div className="flex flex-col gap-1">
							<div className="flex justify-between">
								<div
									className="font-bold"
									className={`${required && "required"}`}
								>
									{label}
								</div>
								<button
									type="button"
									className="bg-sky-200/50 hover:opacity-60 rounded-md py-1 px-5"
									onClick={() => push("")}
								>
									Add
								</button>
							</div>

							{phones &&
								phones.map((phone, index) => (
									<div key={index}>
										<div className="flex justify-between gap-1">
											<Field
												type="text"
												id="primaryPhone"
												name={`${name}[${index}]`}
												className="w-full outline-none border border-black rounded-lg p-2"
											/>
											{index >= 0 && (
												<button
													type="button"
													className="bg-sky-200/50 hover:opacity-60 rounded-md py-1 px-5 disabled:bg-gray-200/50"
													onClick={() => remove(index)}
													disabled={phones.length === 1}
												>
													Remove
												</button>
											)}
										</div>
										<ErrorMessage
											name={`${name}[${index}]`}
											component={TextError}
										/>
									</div>
								))}
						</div>
					)
				}}
			</FieldArray>
		</div>
	)
}

export default ListInput