import React from 'react'

const ReuseProduct = ({ product }) => {
    return (
        <div className="flex flex-col">
            <div className="flex mb-4">
                RentalDreams
                <div className="flex justify-center items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>

                Properties
                <div className="flex justify-center items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>

                Heights Estates
            </div>
            <img src={process.env.PUBLIC_URL + `/images/${product.photo}`} alt={`${product.name}`} className="h-96 w-96 bg-cover rounded cursor-pointer" />
        </div>
    )
}

export default ReuseProduct
