"use client"
import Loading from "@/app/Loading"
import axios from "axios"
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import * as Yup from "yup"
import Image from "next/image"



const validationSchema = Yup.object({
	email: Yup.string().email().required("Invalid email"),
	name: Yup.string().required("Name is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters long")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Password must be matched")
		.required("Confirm Password is required"),
	// Yub.mixed() for upload file with diferent type format
	file: Yup.mixed()
		.test("fileSize", " File size too large > 5MB", (value) => {
			if (!value) {
				return true
			}
			return value.size <= FILE_SIZE
		})
		.test("filsFormat", "Unsupported format", (value) => {
			if (!value) {
				return true
			}
			return SUPPORTED_FORMATS.includes(value.type)
		})
		.required("required"),
})

// for upload file
const FILE_SIZE = 1024 * 1024 * 5 // 5MB

const SUPPORTED_FORMATS = [
	"image/jpg",
	"image/jpeg",
	"image/gif",
	"image/png",
	"image/webp",
	"application/pdf",
]

export default function Page() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	// for submit to server
	const createNewUser = async (user) => {
		const { name, email, password, role, avatar } = user
		const myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		let raw = JSON.stringify({
			name,
			email,
			password,
			role,
			avatar,
		})

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
		}
		try {
			const res = await fetch(
				"https://api.escuelajs.co/api/v1/users",
				requestOptions
			)
			if (!res.ok) {
				alert("something went wrong")
			} else {
				alert("user created successfully")

				const data = await res.json()
				console.log(data)
				return data
			}
		} catch (error) {
			alert(error.message)
		}
	}
	// end of submit to server

	// upload file

	const uploadImage = async (values) => {
		setIsLoading(true)
		try {
			const response = await axios.post(
				"https://api.escuelajs.co/api/v1/files/upload",
				values.file
			)
			console.log(response)
			router.push("/")
			setIsLoading(false)
			return (
				response.data.location ||
				"https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div  className="mt-10">
			<div className='hero-content'>
				{isLoading ? <Loading /> : null}
				<div className='card flex-shrink-0 w-full max-w-md bg-base-100 p-5'>
					<Formik
						initialValues={{
							name: "",
							email: "",
							password: "",
							confirmPassword: "",
							avatar: "images.1.webp",
							role: "customer",
							file: undefined,
						}}
						validationSchema={validationSchema}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							const formData = new FormData()
							formData.append("file", values.file)

							const avatar = await uploadImage({ file: formData })
							console.log("avatar", avatar)

							values.avatar = avatar
							setTimeout(() => {
								createNewUser(values)
								setSubmitting(false)
								resetForm()
							}, 500)
						}}
					>
						{({ isSubmitting, setFieldValue }) => (

							<Form>
								<h1 className="text-2xl font-bold mb-4 text-center">Create User</h1>

								<div>
									<label htmlFor='name'>Username</label> <br />
									<Field
										type='text'
										name='name'
										className='input input-bordered my-3 w-full '
										placeholder='Enter username'
									/>{" "}
									<br />
									<ErrorMessage
										name='name'
										component='h1'
										className='text-red-500 text-xs '
									/>
									{/* email */}
									<label htmlFor='email'>Email</label> <br />
									<Field
										type='email'
										name='email'
										className='input input-bordered my-3 w-full '
										placeholder='Enter your email address'
									/>{" "}
									<br />
									<ErrorMessage
										name='email'
										component='h1'
										className='text-red-500 text-xs '
									/>
									{/* password */}
									<label htmlFor='password'>
										{" "}
										Password{" "}
									</label>{" "}
									<br />
									<Field
										type='password'
										name='password'
										className='input input-bordered my-3 w-full '
										placeholder='Enter your password'
									/>{" "}
									<br />
									<ErrorMessage
										name='password'
										component='h1'
										className='text-red-500 text-xs '
									/>
									{/* confirm password */}
									<label htmlFor='confirmPassword'>
										{" "}
										Confirm Password{" "}
									</label>{" "}
									<br />
									<Field
										type='password'
										name='confirmPassword'
										className='input input-bordered my-3 w-full '
										placeholder='Enter your confirm password'
									/>{" "}
									<br />
									<ErrorMessage
										name='confirmPassword'
										component='h1'
										className='text-red-500 text-xs '
									/>
									{/* file for avarta */}
									<Field
										className=' my-3 file-input file-input-bordered file-input-info w-full '
										name='file'
										type='file'
										title='Select a file'
										setFieldValue={setFieldValue} // Set Formik value
										component={CustomInput} // component prop used to render the custom input
										isSubmitting={isSubmitting}
									/>
									<ErrorMessage
										name='file'
										component='h1'
										className='text-red-500 text-xs '
									/>
									<button
										type='submit'
										disabled={isSubmitting}
										className='btn btn-primary w-full  '
									>
										submit
									</button>
								</div>
							</Form>
							
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

// do drag and drop and preview image
function CustomInput({ field, form, isSubmitting, ...props }) {
	const [preview, setPreview] = useState(null)
	// for reset imageds
	useEffect(() => {
		if (isSubmitting) {
			setPreview(null)
		}
	}, [isSubmitting])
	return (
		<div>
			<input
				type='file'
				onChange={(event) => {
					form.setFieldValue(field.name, event.currentTarget.files[0])
					setPreview(URL.createObjectURL(event.currentTarget.files[0]))
				}}
				// {...props} is use to pass all props from Formik Field component
				{...props}
			/>
			{preview && (
				<div className='avatar'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
						<Image unoptimized width={500} height={500}
							src={preview}
							alt='dummy'
	
						/>
					</div>
				</div>
			)}
		</div>
	)
}

// end of drag and drop and preview image
