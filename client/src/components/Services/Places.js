import React from 'react'

const Places = () => {
    return (
        <div className="max-w-7xl mx-auto mt-12 h-screen">
           <h1 className="mb-10 pt-12 text-2xl font-normal text-center text-gray-800 uppercase">Most Popular Places </h1>

           <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 xs:grid-cols-1">
            <p className="bg-gray-100 px-4 py-8 col-span-2 row-span-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="bg-yellow-100 px-4 py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="bg-indigo-100 px-4 py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="bg-red-100 px-4 py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="bg-green-100 px-4 py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
           </div>
        </div>
    )
}

export default Places
