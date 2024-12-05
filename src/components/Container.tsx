import React from "react"

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-7xl  md:px-8 sm:px-6 px-4 mx-auto min-h-screen'>
            {children}
        </div>
    )
}

export default Container
