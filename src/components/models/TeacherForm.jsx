import React,{useState} from "react"
import Image from "next/image"
import { useFormik } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import "tailwindcss/tailwind.css"
import { FiUpload } from "react-icons/fi"

// Zod schema for validation
const SignupSchema = z.object({
	firstname: z.string().min(2, "First name must be at least 2 characters"),
	lastname: z.string().min(2, "Last name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	username: z.string().min(2, "Username must be at least 2 characters"),
	password: z.string().min(6, "Password must be at least 6 characters"),
	address: z.string().min(2, "Address must be at least 2 characters"),
	birthday: z
		.date()
		.or(z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date")),
	phone: z.string().min(10, "Phone number must be at least 10 digits"),
	photo: z.instanceof(File, "Photo must be a file"),
})

const TeacherForm = ({ requester, request, data, id }) => {
    const [isOpen, setIsOpen] = useState(false)
	const [photo, setPhoto] = useState(null)
	const [photoPreview, setPhotoPreview] = useState(null)


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



	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			username: "",
			password: "",
			address: "",
			birthday: "",
			phone: "",
			photo: null,
		},
		validationSchema: toFormikValidationSchema(SignupSchema),
		onSubmit: (values) => {
			// Convert the FormData to an object for logging purposes
			const formData = new FormData()
			Object.keys(values).forEach((key) => {
				formData.append(key, values[key])
			})
			console.log("Form data", Object.fromEntries(formData.entries()))
			console.log(formData)

		},
	})
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
	return (
		<>
			<button
				disabled={isOpen}
				className={`px-2 py-2 rounded-full ${bgColor}`}
				onClick={() => setIsOpen(true)}
			>
				<Image src={`${icon}.png`} width={15} height={15} alt="" />
			</button>

			{isOpen && (
				<div className="w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50 fixed top-0 left-0 p-1">
					<div className="bg-white rounded-lg w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] pb-4">
						<div className="flex justify-end p-2">
							<button
								className="px-2 py-2 bg-heavenRedLight rounded-full"
								onClick={() => setIsOpen(false)}
							>
								<Image src="/close.png" width={15} height={15} alt="" />
							</button>
						</div>
						{request === "create" || request === "update" ? (
                            
							<form >
								<div className="flex flex-col items-center mb-6 ">
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
								{/* Fields */}
								<div className="grid grid-cols-2 gap-6">
									{[
										"firstname",
										"lastname",
										"email",
										"username",
										"password",
										"address",
										"birthday",
										"phone",
									].map((field) => (
										<div className="px-5" key={field}>
											<label
												htmlFor={field}
												className="block text-sm font-medium text-gray-700 capitalize"
											>
												{field}
											</label>
											<input
												id={field}
												name={field}
												type={field === "password" ? "password" : "text"}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values[field]}
												className={`mt-1 block w-full px-3 py-2 border ${
													formik.touched[field] && formik.errors[field]
														? "border-red-500"
														: "border-gray-300"
												} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
											/>
											{formik.touched[field] && formik.errors[field] ? (
												<p className="mt-2 text-sm text-red-600">
													{formik.errors[field]}
												</p>
											) : null}
										</div>
									))}
								</div>
	
<div className="flex justify-center mt-8">
											<button
												type="submit"
												onClick={formik.handleSubmit}
												className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
											>
												submit
											</button>
										</div>
							</form>
						) : (
							"Form not found!"
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default TeacherForm
