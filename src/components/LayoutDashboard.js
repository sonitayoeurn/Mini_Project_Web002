import React from "react"
import SideBar from "./SideBar"

const LayoutDashboard = ({ children }) => {
	return (
		<div>
			<SideBar />
			{children}
		</div>
	)
}

export default LayoutDashboard
