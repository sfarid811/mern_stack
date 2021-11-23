import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsByCount } from '../../actions/productActions';
import { getAllCategories } from '../../actions/categoryActions';
import Card from './Card';


const GridFilter = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => (state.productList.products));
    const categories = useSelector(state => (state.categoryReducer.categories));




    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    useEffect(() => {
        dispatch(getProductsByCount());
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-24 ">
            <div class="grid grid-cols-4  gap-6 md:grid-cols-3 sm:grid-cols-1 mx-12">
                <div className="">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">categories</h3>

                    <Fragment>
                        {categories && categories.map((category, i) => (
                            <div className="flex items-center mt-4" key={category._id}>
                                <input type="checkbox"
                                    className="text-primary  rounded-sm cursor-pointer" value={category._id} id={i} />
                                <label for="Bedroom" className="text-gray-600 ml-3 cursor-pointer">{category.name}</label>
                                <div htmlFor={i} className="ml-auto text-gray-600 text-sm">{categories.length}</div>
                            </div>
                        ))}

                    </Fragment>

                    <div class="pt-4 my-12">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                        <div class="mt-4 flex items-center">
                            <input type="text"
                                class="w-full border-gray-900 focus:outline-none px-3 py-2 text-gray-600 text-sm shadow-md rounded"
                                placeholder="min" />
                            <span class="mx-3 text-xl text-gray-900">-</span>
                            <input type="text"
                                class="w-full border-gray-900 focus:outline-none px-3 py-2 text-gray-600 text-sm shadow-md rounded"
                                placeholder="max" />
                        </div>
                    </div>

                </div>

                {products.map((product, i) => (
                    <Card product={product} key={i} />
                ))}



            </div>
        </div>
    )
}

export default GridFilter
