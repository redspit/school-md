import Image from "next/image"
import { useState } from "react"
import { FiUpload } from "react-icons/fi"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"

const FormModel = ({ requester, request, data, id }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [v, setV] = useState("")
	const [photo, setPhoto] = useState(null)
	const [photoPreview, setPhotoPreview] = useState(null)

	const validationSchema = Yup.object({
		firstname: Yup.string().required("First Name is required"),
		lastname: Yup.string().required("Last Name is required"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		username: Yup.string()
			.required("First Name is required")
			.min(3, "Password must be at least 3 characters long!")
			.max(20, "Password must be at most 20 characters long!"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 8 characters long!"),
		address: Yup.string().required("Address is required"),
		birtday: Yup.date().required("Birthday is required"),
		phone: Yup.string()
			.matches(/^\d{10}$/, "Invalid phone number")
			.required("Phone number is required"),
	})

	const handlePhotoChange = (e) => {
		const file = e.target.files[0]
		if (file) {
			setPhoto(file)
			const reader = new FileReader()
			reader.onloadend = () => {
				setPhotoPreview(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}

	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		username: "",
		password: "",
		address: "",
		birthday: "",
		phone: "",
	}

	const icon =
		request === "create"
			? "/create"
			: request === "update"
			? "/edit"
			: "/delete"
	const bgColor =
		request === "create"
			? "bg-heavenYellow"
			: request === "update"
			? "bg-heavenPurple"
			: "bg-heavenRedLight"

	const onSubmit = (values) => {
		console.log("Form Data:", { ...values, photo })
		// setSubmitting(false)
		axios.post("http://localhost:3000/api/t", {"firstname":"values.firstname"})
	}

	return (
		<>
			<button
				disabled={isOpen}
				className={`px-2 py-2 rounded-full ${bgColor}`}
				onClick={() => setIsOpen(true)}
			>
				<Image src={`/images${icon}.png`} width={15} height={15} alt="" />
			</button>

			{isOpen && (
				<div className="w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50 fixed top-0 left-0 p-1">
					<div className="bg-white rounded-lg w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] pb-4">
						<div className="flex justify-end p-2">
							<button
								className="px-2 py-2 bg-heavenRedLight rounded-full"
								onClick={() => setIsOpen(false)}
							>
								<Image src="/images/close.png" width={15} height={15} alt="" />
							</button>
						</div>
						{request === "delete" && data ? (
							<form action="" className="p-4 flex flex-col gap-4">
								<span className="text-center font-medium">
									All data will be lost. Are you sure you want to delete{" "}
									<span className="text-heavenRed font-bold">
										"{data.name}"
									</span>
									?
								</span>
								<button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
									Delete
								</button>
							</form>
						) : request === "create" || request === "update" ? (
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={onSubmit}
							>
								{({ isSubmitting, setFieldValue }) => (
									<Form className="space-y-5 mx-5">
										{/* PHOTO */}
										<div className="flex flex-col items-center mb-6">
											<div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100">
												{photoPreview ? (
													<img
														src={photoPreview}
														alt="Preview"
														className="w-full h-full object-cover"
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center">
														<FiUpload className="w-8 h-8 text-gray-400" />
													</div>
												)}
											</div>
											<label className="mt-4 cursor-pointer">
												<span className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
													Upload Photo
												</span>
												<input
													type="file"
													accept="image/*"
													onChange={handlePhotoChange}
													className="hidden"
													aria-label="Upload teacher photo"
												/>
											</label>
											{!photo && (
												<p className="text-red-500 text-sm mt-1">
													Photo is required
												</p>
											)}
										</div>
										{/* INPUT FIELDS */}
										<div className="grid grid-cols-2 gap-6">
											{/* FIRST NAME */}
											<div className="min-w-[50%]">
												{v.firstname}
												<label
													htmlFor="firstname"
													className="block text-sm font-medium text-gray-700"
												>
													First Name
												</label>
												<Field
													type="text"
													id="firstname"
													name="firstname"
													placeholder="Enter First Name"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="firstname"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* LAST NAME */}
											<div className="min-w-[50%]">
												<label
													htmlFor="lastname"
													className="block text-sm font-medium text-gray-700"
												>
													Last Name
												</label>
												<Field
													type="text"
													id="lastname"
													name="lastname"
													placeholder="Enter Last Name"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="lastname"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* EMAIL */}
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700"
												>
													Email
												</label>
												<Field
													type="email"
													id="email"
													name="email"
													placeholder="Enter Email"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="email"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* USERNAME */}
											<div>
												<label
													htmlFor="username"
													className="block text-sm font-medium text-gray-700"
												>
													Username
												</label>
												<Field
													type="text"
													id="username"
													name="username"
													placeholder="Enter Username"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="username"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* PASSWORD */}
											<div>
												<label
													htmlFor="password"
													className="block text-sm font-medium text-gray-700"
												>
													Password
												</label>
												<Field
													type="password"
													id="password"
													name="password"
													placeholder="Enter Password"
													autoComplete="on"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="password"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* Address */}
											<div>
												<label
													htmlFor="address"
													className="block text-sm font-medium text-gray-700"
												>
													Address
												</label>
												<Field
													type="text"
													id="address"
													name="address"
													placeholder="Enter Address"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="address"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* PHONE */}
											<div>
												<label
													htmlFor="phone"
													className="block text-sm font-medium text-gray-700"
												>
													Phone
												</label>
												<Field
													type="tel"
													id="phone"
													name="phone"
													placeholder="Enter Phone Number"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="phone"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
											{/* Birthday */}
											<div>
												<label
													htmlFor="birthday"
													className="block text-sm font-medium text-gray-700"
												>
													Birthday
												</label>
												<Field
													type="date"
													id="birthday"
													name="birthday"
													placeholder="Enter Birthday"
													className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
												/>
												<ErrorMessage
													name="birthday"
													component="p"
													className="text-red-500 text-sm mt-1"
												/>
											</div>
										</div>
										<div className="flex justify-center mt-8">
											<button
												type="submit"
												disabled={isSubmitting}
												className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
											>
												{isSubmitting ? "Submitting..." : "Submit"}
											</button>
										</div>
									</Form>
								)}
							</Formik>
						) : (
							"Form not found!"
						)}
					</div>
				</div>
			)}
		</>
	)
}
export default FormModel
