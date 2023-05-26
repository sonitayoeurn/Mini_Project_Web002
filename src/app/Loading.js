import React from "react"

const Loading = () => {
	return (
		
   
        <section className="absolute w-screen top-0 h-screen bg-center bg-no-repeat bg-opacity-70 bg-red-900 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Loading...
            </h1>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
          </div>
        </section>
      
	)
}

export default Loading
