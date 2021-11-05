import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { populateCategory } from '../actions/categoryActions';

const FilterShop = () => {

  const dispatch = useDispatch();


  const categoryReducer = useSelector(state => (state.categoryReducer));

  const { categories } = categoryReducer;



  useEffect(() => {
    dispatch(populateCategory())

  }, [dispatch])


  return (
    <div className="max-w-7xl mx-auto py-32">
      <div className="flex md:flex-col sm-flex-col">
        <div className="w-1/3 bg-indigo-100 mr-2 sm:w-full sm:mb-12">
          <h3 className="text-gray-900 text-lg font-bold text-center">Filter By Category</h3>
          <div className="flex flex-col my-12">
            {categories && categories.map(category => (
              <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="cursor-pointer h-6 w-6 text-white border border-gray-300 rounded-md checked:bg-gray-600 checked:border-transparent text-center focus:outline-none p-1" /><span className="ml-2 text-gray-700">{category.name}</span>
              </label>

            ))}

          </div>
        </div>
        <div className="w-2/3 sm:w-full">
          <div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
            <p className="p-4 bg-green-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! </p>
            <p className="p-4 bg-green-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! </p>
            <p className="p-4 bg-green-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default FilterShop
