import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsByCount } from '../../actions/productActions';


const Features = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => (state.productList));

    const { products } = productList;
    console.log(products)
   
    useEffect(() => {
        dispatch(getProductsByCount());
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-24 h-screen">
 

            <div className="flex md:flex-col"> 
                <div className="px-4 py-3 w-1/3 blur-sm opacity-90 mr-4">
                    <span className="text-md text-gray-500 font-semibold">
                        Property Type
                    </span>
                  
                       <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input
                                type="radio"
                                className="form-radio bg-gray-900 border-0 cursor-pointer"
                                name="proprtyType"
                                value="house"
                            />
                            <span className="ml-2">House</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input
                                type="radio"
                                className="form-radio bg-gray-900 border-0 cursor-pointer"
                                name="proprtyType"
                                value="apartment"
                            />
                            <span className="ml-2">Apartment</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input
                                type="radio"
                                className="form-radio bg-gray-900 border-0 cursor-pointer"
                                name="proprtyType"
                                value="apartment"
                            />
                            <span className="ml-2">Villa</span>
                        </label>
                    
                </div>
                <div className="w-2/3 md:w-full">
                    <div className="grid gap-4 grid-cols-3 md:grid-cols-1 sm:grid-cols-1 sm:text-center md:mx-4 lg:mx-4 sm:mx-4" >
                        {products.map((product) => (
                            <Fragment>
                                <div className="shadow-lg bg-white rounded-xl overflow-hidden flex">
                                    <div className="flex flex-col">
                                        <img src={process.env.PUBLIC_URL + `/images/${product.photo}`} alt={`${product.name}`}
                                            className="h-48 w-full object-cover cursor-pointer bg-opacity-500" />


                                        <h1 className="text-lg font-bold leading-tight text-darken py-4 ml-4">{product.name}</h1>
                                        <p className="font-normal text-gray-700 px-4 flex-grow flex-1 pb-4">{product.description.substring(0, 80)}
                                            <span className="text-xl font-bold text-gray-900">...</span></p>
                                        <div className="flex px-4 justify-around items-center">
                                            <span className="text-xl text-gray-900 font-bold">{product.price.toLocaleString('en-US')}/mo</span>
                                            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold px-4 py-2 cursor-pointer">For rent</span>
                                        </div>
                                        <div className="flex my-6 px-4 justify-around">
                                            <span className="flex justify-center items-center"><i class="fas fa-bed text-gray-700 mr-2 hover:text-gray-500 text-2xl cursor-pointer"></i>2 bed</span>
                                            <span className="flex justify-center items-center"><i class="fas fa-bath text-gray-700 mr-2 hover:text-gray-500 text-2xl cursor-pointer"></i>2 Bathroom</span>
                                            <span className="flex justify-center items-center"><i class="fas fa-home text-gray-700 mr-2 hover:text-gray-500 text-2xl cursor-pointer"></i>1700 sqft</span>
                                        </div>
                                        <button className="bg-gray-900 text-white py-2 px-4 hover:bg-gray-600 capitalize focus:outline-none mt-4">view more</button>

                                    </div>
                                </div>

                            </Fragment>

                        ))}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Features;
