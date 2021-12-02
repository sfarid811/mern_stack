import React, { Fragment, useState } from 'react';

const FilterByCategory = ({ categories, handleFilters }) => {

      const [checked] = useState(new Set())

    const handleCategory = (category) => {
        if(checked.has(category._id)) {
            checked.delete(category._id)
        }
        else{
            checked.add(category._id)
        }
        handleFilters(Array.from(checked));
        console.log(checked)
    }
   
    return (

        <div className="flex flex-col mt-4">
            {categories && categories.map((category, i) => (
                <Fragment key={category._id}>
                    <div className="mt-4">
                        <input value={category._id} type="checkbox" id={i}
                            className="text-primary rounded-sm cursor-pointer" 
                            onClick={() => handleCategory(category)}
                            />
                        <label htmlFor={i} className="text-gray-600 ml-3 cursor-pointer">{category.name}</label>
                    </div>
                    <div>
                    </div>
                </Fragment>

            ))}
        </div>
    )
}

export default FilterByCategory;
