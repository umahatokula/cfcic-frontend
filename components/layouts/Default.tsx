import React from 'react'

function DefaultLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="w-full flex justify-center bg-[#FBFBFB]">
        {/* <Alert /> */}
        <main className="w-full laptop:w-[550px] desktop:w-[600px] min-h-screen shadow bg-white text-gray-800 px-6 pt-20 pb-32">
            { children }
        </main>
    </div>
  )
}

export default DefaultLayout