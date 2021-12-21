import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions/productActions';
import EditProduct from './EditProduct';

const SuiteTable = ({ product, showModal, setShowModal, currentId, setCurrentId }) => {
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure to delete this product?')) {
            dispatch(deleteProduct(id))
        }
    }


    return (
        <Fragment>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full"
                                src={process.env.PUBLIC_URL + `/images/${product.photo}`} alt={`${product.name}`} />
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
                        className="relative flex space-x-4 px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span className="flex items-center justify-center cursor-pointer
                        text-gray-900 hover:text-gray-700
                        ">
                            <svg
                                onClick={() => (deleteHandler(product._id))}
                                className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </span>
                        {/* <span className="relative">{product.quantity}</span> */}
                        <span className="cursor-pointer text-gray-900 hover:text-gray-700">
                        {showModal ? <EditProduct 
                        setShowModal={setShowModal}
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                        
                        /> : null}
                            <svg 
                              onClick={() => setShowModal(true)}
                            className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </span>

                    </span>

                </td>




            </tr>
        </Fragment>
    )
}

export default SuiteTable
