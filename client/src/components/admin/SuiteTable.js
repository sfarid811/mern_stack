import React, { Fragment } from 'react';

import {useDispatch} from 'react-redux';
import {deleteProduct} from '../../actions/productActions';

const SuiteTable = ({ product }) => {


    const dispatch = useDispatch();
    return (
        <Fragment>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full"
                                src={process.env.PUBLIC_URL + `/images/${product.photo}`}  alt={`${product.name}`} />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap font-bold">
                                {product.name}
                            </p>
                        </div>
                    </div>
                </td>


                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{product.category.name}</p>
                </td>


                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {product.description.substring(0, 30)} <span className="text-xl font-bold text-gray-900">...</span>
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span className="absolute inset-0 flex items-center justify-center cursor-pointer">
                        <svg 
                        onClick={() => dispatch(deleteProduct(product._id))}
                        className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </span>
                        {/* <span className="relative">{product.quantity}</span> */}
                      
                        
                    </span>
                </td>




            </tr>
        </Fragment>
    )
}

export default SuiteTable
