import { usePathname } from "next/navigation"
import React from "react"

// meta data
export const metadata = {
	title: "Login - ISTAD | Secure Access to Your Account",
	description: "Login to your ISTAD account securely and access your personalized dashboard. Get started with ISTAD's features and services.",
	openGraph: {
	  type: "website",
	  url: "/login",
	  title: "Login - ISTAD | Secure Access to Your Account",
	  description: "Login to your ISTAD account securely and access your personalized dashboard. Get started with ISTAD's features and services.",
	},
  };
  

const page = () => {


	return (
		<div className='min-h-screen'>
		
			<div className='hero-content lg:flex-row-reverse'>
			
				<div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
					<div className='card-body'>
					<h1 className="text-2xl font-bold mb-4 text-center">Login Form</h1>

						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								placeholder='email'
								className='input input-bordered'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='text'
								placeholder='password'
								className='input input-bordered'
							/>
							<label className='label'>
								<a
									href='#'
									className='label-text-alt link link-hover'
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page
