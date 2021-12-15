import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_CATEGORY } from '../../config';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';
import { filterProducts } from '../api/index';
import Card from '../features/Card';

const Search = () => {

    const [limit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const [categories, setCategories] = useState([]);
    const [productsFiltred, setProductsFiltred] = useState([]);
    const [myFilters, setMyFilters] = useState({
        category: [],
        price: []
    })

    const getCategories = async () => {
        try {
            const result = await axios.get(`${API_CATEGORY}/all`);
            const data = result.data.categories;
            setCategories(data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getCategories();
        filterProducts(skip, limit, myFilters)
            .then(res => {
                setProductsFiltred(res)
                setSkip(0)
                setSize(res.length)
            })
    }, [myFilters])

    const loadMore = () => {

        const toSkip = skip + limit;

        filterProducts(toSkip, limit, myFilters)
            .then(res => {
                setProductsFiltred([...productsFiltred, ...res])
                setSize(res.length)
                setSkip(toSkip)
            })
    }


    const handleFilters = (data, filterBy) => {
        setMyFilters({ ...myFilters, [filterBy]: data });

        console.log("SHOP", data, filterBy)
    }

    const buttonToLoadMore = () => {

        return (
            size > 0 &&
            size >= limit &&
            (
                <div className="text-center">
                    <button onClick={loadMore} className="bg-gray-900 text-white px-4 py-2 w-full hover:bg-gray-700 focus:outline-none">Load More</button>
                </div>
            )
        )

    }

    return (
        <div className="max-w-7xl mx-auto mt-24 ">
            <div class="grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-12">
                <div className="row-span-3">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Filter By Category</h3>

                    <FilterByCategory categories={categories}
                        handleFilters={data => handleFilters(data, 'category')}
                    />

                    <div class="pt-4 my-12">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Filter By Price</h3>
                        <FilterByPrice

                            handleFilters={data => handleFilters(data, 'price')}
                        />
                    </div>

                </div>

                {productsFiltred.map((product, i) => (
                    <Card product={product} key={i} />

                ))}

                <div>

                </div>

                {buttonToLoadMore()}
            </div>


        </div>
    )
}

export default Search;
