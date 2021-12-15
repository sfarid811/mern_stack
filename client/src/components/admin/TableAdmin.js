import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, getProductsByFilter } from '../../actions/productActions';
import Modal from './Modal';
import SuiteTable from './SuiteTable';
import Paginate from './Paginate';


const TableAdmin = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const {products, pages, page } = productList;

    console.log(pages, page, "foo")

    const [text, setText] = useState('');

    const resetState = () => {
        setText('');

    };

    const handleSearch = (e) => {
        resetState()
        setText(e.target.value);
        dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
    }


  
    useEffect(() => {
        dispatch(getAllProducts(currentPage));
    }, [dispatch, currentPage])
    return (
        <div className="antialiased font-sans h-screen my-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-semibold leading-tight">Products</h2>
                        <button className="bg-gray-900 text-white py-2 px-4 hover:bg-gray-700  focus:outline-none"
                         onClick={() => setShowModal(true)}
                        >+ Add Product</button>

                        {showModal ? <Modal  setShowModal={setShowModal}/> : null }
                    </div>
                    <div className="my-2 flex sm:flex-row flex-col">

                        <div className="block relative">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search"
                                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b
                             block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white 
                             focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" 
                             name="search"
                             value={text}
                             onChange={handleSearch}
                             />
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map(product => (
                                    <SuiteTable product={product}  key={product._id}/>
                                    ))}
                                 
                                </tbody>
                            </table>
                  
                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 3 of 9 Products
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                 <Paginate pages={pages} page={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAdmin;
