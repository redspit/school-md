"use client"
import React, { useState, useEffect, useCallback } from "react"
import {
	Formik,
	Field,
	FieldArray,
	Form,
	ErrorMessage,
} from "formik"
import * as Yup from "yup"
import axios from "axios"
import Image from "next/image"
import { ToastContainer, toast } from "react-toastify"
import SearchBar from '@/components/search'
const validate = (value) => {
	let error
	if (!value) {
		error = "User Name is rquired"
	} else if (value.length < 6) {
		error = "User Name must be more than 6 characters long"
	}

	return error
}

const validationSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password must be at least 8 characters long!"),
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	bio: Yup.string().min(3, "Bio must be at least 3 characters long!"),
	address: Yup.string().required("Address is required"),
	phones: Yup.array().of(
		Yup.number().when((value, schema) => {
			if (initialValues.phones.length === 1) {
				return schema.required("Phone is required")
			}
			return schema
		})
	),
	contact: Yup.object({
		name: Yup.string().required("Contact's name is required"),
		phone: Yup.number().required("Contact's phone is required"),
	}),
})
const initialValues = {
	username: "",
	password: "",
	email: "",
	bio: "",
	address: "",
	phones: [""],
	contact: {
		name: "",
		phone: "",
	},
}

const onSubmit = (values, { setSubmitting, resetForm }) => {
	try {
		axios.post("http://localhost:3000/api/teacher", values).then(() => {
			setSubmitting(false)
			toast.success("Teacher has been added successfully", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			})
			resetForm()
		})
	} catch (error) {
		if (error.response) {
			console.log("Error Response:", error.response.data)
		} else if (error.request) {
			console.log("Error Request:", error.request)
		} else {
			console.log("Error Message:", error.message)
		}
		console.log("Error Config:", error.config)
		setSubmitting(false)
	}
}

export const SimpleForm = () => {
		const [teachers, setTeachers] = useState([])
		const [searchWord, setSearchWord] = useState("")
		const [formValues, setFormValues] = useState(null)

	const search =  () => {
		searchWord && axios
			.get(`http://localhost:3000/api/teacher/${searchWord}`)
			.then((res) => {
				if (!res.data.message) {
					setFormValues(res.data)
				} else {
					setFormValues(initialValues)
				}
			})
	}

	return (
		<Formik
			initialValues={formValues || initialValues}
			enableReinitialize
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			// validateOnChange={false}
			// validateOnBlur={false}
			validateOnMount
		>
			{({ isSubmitting, setFieldValue, isValid, resetForm }) => (
				<Form className="grid gap-2 w-1/3 ">
					<ToastContainer
						position="top-center"
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick={false}
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="colored"
					/>
					{/* SEARCH BAR */}
					<div className="flex gap-2">
						<SearchBar
							value={searchWord}
							onChange={(e) => setSearchWord(e.target.value)}
						/>
						<button
							type="button"
							onClick={search}
							className="bg-green-500 hover:opacity-60 rounded-lg w-1/3 p-1 disabled:bg-gray-200"
						>
							Search
						</button>
					</div>

					{/* USERNAME */}
					<div className="flex items-center justify-between gap-2">
						<label htmlFor="username">Username</label>
						<Field
							type="text"
							id="username"
							name="username"
							className="outline-none border-2 border-black rounded-lg p-2"
						/>
					</div>
					<ErrorMessage name="username" component={TextError} />
					{/* PASSWORD */}
					<div className="flex items-center justify-between gap-2">
						<label htmlFor="password">Password</label>
						<Field
							type="password"
							id="password"
							name="password"
							autoComplete="true"
							className="outline-none border-2 border-black rounded-lg p-2"
						/>
					</div>
					<ErrorMessage name="password" component={TextError} />
					{/* EMAIL */}
					<div className="flex items-center justify-between gap-2">
						<label htmlFor="email">Email</label>
						<Field
							type="email"
							name="email"
							className="outline-none border-2 border-black rounded-lg p-2"
						/>
					</div>
					<ErrorMessage name="email" component={TextError} />
					{/* BIO */}
					<div className="flex items-center justify-between gap-2">
						<label htmlFor="bio">Bio</label>
						<Field
							as="textarea"
							name="bio"
							autoComplete="true"
							className="outline-none border-2 border-black rounded-lg p-2 "
						/>
					</div>
					<ErrorMessage name="bio" component={TextError} />
					{/* ADDRESS */}
					<div className="flex items-center justify-between gap-2">
						<label htmlFor="address">Address</label>
						<Field name="address" id="address">
							{({ field, form, meta }) => {
								return (
									<div className="flex flex-col">
										<div className="flex rounded-lg border border-gray-400 px-2 py-4  items-center h-[20px] space-x-2 text-sm text-gray-500">
											<Image
												src="/location.png"
												width={15}
												height={15}
												alt="search icon"
											/>
											<input
												type="text"
												{...field}
												id="address"
												name="address"
												className="bg-transparent border-0 ring-0 outline-none "
												placeholder="Address"
											/>
										</div>
										{meta.touched && meta.error && (
											<div className="text-sm text-red-500">{meta.error}</div>
										)}
									</div>
								)
							}}
						</Field>
					</div>
					{/* PHONES */}
					<div className="border p-3 w-full flex flex-col justify-between gap-2">
						<FieldArray type="text" id="primaryPhone" name="phones">
							{({ push, remove, form }) => {
								const { phones } = form.values
								return (
									<div className="flex flex-col gap-1">
										<div className="flex justify-between">
											<div className="font-bold">Phones</div>
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
															name={`phones[${index}]`}
															className="w-full outline-none border border-black rounded-lg p-2"
														/>
														{index >= 0 && (
															<button
																type="button"
																className="bg-sky-200/50 hover:opacity-60 rounded-md py-1 px-5 disabled:bg-gray-200/50"
																onClick={() => {
																	phones.length === 1
																		? alert(
																				"Must provide at least one phone number"
																		  )
																		: remove(index)
																}}
																// disabled={index === 0}
															>
																Remove
															</button>
														)}
													</div>
													<ErrorMessage
														name={`phones[${index}]`}
														component={TextError}
													/>
												</div>
											))}
									</div>
								)
							}}
						</FieldArray>
					</div>

					{/* CONTACT'S INFO */}
					<div className="border p-3 w-full flex flex-col  justify-between gap-1">
						<div className="font-bold"> Contact</div>
						<div className="flex items-center justify-between gap-2">
							<label htmlFor="contact.name">Name</label>
							<Field
								type="text"
								id="contact.name"
								name="contact.name"
								className="outline-none border-2 border-black rounded-lg p-2 "
							/>
						</div>
						<ErrorMessage name="contact.name" component={TextError} />

						<div className="flex items-center justify-between gap-2">
							<label htmlFor="contact.phone">Phone</label>
							<Field
								type="text"
								id="contact.phone"
								name="contact.phone"
								className="outline-none border-2 border-black rounded-lg p-2 "
							/>
						</div>
						<ErrorMessage name="contact.phone" component={TextError} />
					</div>

					{/* SUBMIT BUTTON */}
					<div className="flex items-center justify-center gap-5">
						<button
							type="reset"
							className="bg-transparnet border-2 border-heavenSky hover:opacity-60 rounded-lg w-1/2 p-1"
							onClick={() => {
								setFormValues(initialValues)
							}}
						>
							Reset
						</button>
						<button
							type="submit"
							className="bg-green-500 hover:opacity-60 rounded-lg w-1/2 p-1 disabled:bg-gray-200"
							disabled={isSubmitting || !isValid}
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

const TextError = ({ children }) => {
	return (
		<div className="flex flex-row items-center gap-1">
			<div className="w-[15px] h-[15px]">
				<Image src="/cross.png" width={15} height={15} alt="search icon" />
			</div>
			<div className="text-sm text-red-500">{children}</div>
		</div>
	)
}


