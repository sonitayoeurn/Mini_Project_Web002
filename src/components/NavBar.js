"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import React from "react"
const NavBar = () => {
	const pathName = usePathname()
	console.log(pathName)
	if(pathName.includes("/dashboard")){
		return null
	}

	if(pathName.includes("sign-up")) return null;
		

	return (
		<div className='navbar bg-base-100 sticky top-0 z-50'>
			<div className='navbar-start'>

				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					> 
						<li>
            <Link href={"/"} >Home</Link>
						</li>
            <li>
						<Link href={"/users"}>All Users</Link>
					  </li>
						
						<li>
						<Link href={"/about"}>About us</Link>
					  </li>
            <li>
						<Link href={"/product/upload"}>Post Product</Link>
					</li>
					</ul>
				</div>
				<Link href={"/"} className='btn btn-ghost normal-case '>
					<img className="w-10" src="/images/alien.png" alt="" />
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link href={"/"} >Home</Link>
					</li>
				
					<li>
						<Link href={"/users"}>All Users</Link>
					</li>
          <li>
						<Link href={"/about"}>About us</Link>
					</li>
          <li>
						<Link href={"/product/upload"}>Post Product</Link>
					</li>
                   
				</ul>
			</div>
			<div className='navbar-end space-x-3'>
				<Link href={"/sign-up"} className='btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"'>Post User</Link>
        <Link href={"/login"} className='btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"'>Log In</Link>
			</div>

			
		</div>
	)
}

export default NavBar