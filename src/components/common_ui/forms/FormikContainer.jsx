"use client"
import React from 'react'
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import Image from "next/image"
import { ToastContainer, toast } from "react-toastify"
import { format } from "date-fns"
import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from "next/cache"

const FormikContainer = ({children, ...rest}) => {
    const validationSchema = Yup.object({
			username: Yup.string().required("Username is required"),
			password: Yup.string()
				.required("Password is required")
				.min(6, "Password must be at least 8 characters long!"),
			repassword: Yup.string()
				.oneOf([Yup.ref("password"), ""], "Passwords must mutch")
				.required("Password is required"),
			email: Yup.string()
				.email("Invalid email format")
				.required("Email is required"),
			bio: Yup.string().min(3, "Bio must be at least 3 characters long!"),
			address: Yup.string().required("Address is required"),
			nationality: Yup.string().required("You must select a nationality"),
			zipCode: Yup.string().when("nationality", {
				is: "American",
				then: () =>
					Yup.string().required("ZipCode for american states is required"),
			}),
			gender: Yup.string().required("You must select a gender"),
			role: Yup.array()
				.min(1, "You must select at least one responsibility role")
				.required("You must select a responsibility role"),
			birthday: Yup.date().required("You must select a birthday"),
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
			repassword:"",
			email: "",
			bio: "",
			address: "",
			zipCode:"",
			nationality: "",
			gender: "Male",
			role: ["Stuff"],
			birthday:"",
			phones: [""],
			contact: {
				name: "",
				phone: "",
			},
		}
const onSubmit = (values, { setSubmitting, resetForm }) => {
	try {
		axios.post("http://localhost:3000/api/teacher", {"id":uuidv4(), ...values}).then(() => {
			toast.success("Records has been added successfully", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			})
			console.log(values)
			setSubmitting(false)
			resetForm()
			// revalidatePath('/test')
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
  return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				validateOnMount
			>
				{({ isSubmitting, setFieldValue, isValid, resetForm, values }) => (
					<Form {...rest}>
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
						{children}
						<div className="flex items-center justify-center gap-5">
							<button
								type="reset"
								className="bg-transparnet border-2 border-heavenSky hover:opacity-60 rounded-lg w-1/2 p-1"
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
		</div>
	)
}

export default FormikContainer