import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../actions/categoryActions';

const FilterShop = ({categoryIds, handleCategory}) => {

  const dispatch = useDispatch();


  const categories = useSelector(state => (state.categoryReducer.categories));
 
  const categoryFilter = useSelector(state => (state.filterReducer.category));


  useEffect(() => {
    dispatch(getAllCategories())

  }, [dispatch])


  return (
   
      <> 
      <h3 className="text-gray-900 text-lg font-bold text-center">Filter By Category</h3>
          <div className="flex flex-col my-12">
            {categories && categories.map((category, index) => (
              <label className="inline-flex items-center mt-3" key={index}>
                <input type="checkbox"
                  className="cursor-pointer h-6 w-6 text-white border border-gray-300 
                rounded-md checked:bg-gray-600 checked:border-transparent text-center focus:outline-none p-1"
                onClick={categoryIds.includes(category._id)}
								onClick={handleCategory}
                id='flexCheckChecked'
                />
                <span className="ml-2 text-gray-700">{category.name}</span>
              </label>

            ))}

          </div>
          </>

  )
}

export default FilterShop
