import React, { Fragment } from 'react';

const SuiteTable = ({ product }) => {
    return (
        <Fragment>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt="" />
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
                        <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">{product.quantity}</span>
                    </span>
                </td>




            </tr>
        </Fragment>
    )
}

export default SuiteTable
