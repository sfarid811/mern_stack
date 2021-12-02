import React, { Fragment, useState } from 'react';


const FilterByPrice = ({handleFilters}) => {
    const prices = [
        {
            _id: 1,
            name: "Any",
            value: []
        },
        {
            _id: 2,
            name: "20000$ to 40000$",
            value: [20000, 40000]
        },
        {
            _id: 3,
            name: "40000$ to 60000$",
            value: [40000, 60000]
        },
        {
            _id: 4,
            name: "60000$ to 80000$",
            value: [60000, 80000]
        },
        {
            _id: 5,
            name: "More",
            value: [90000, 9999999]
        }
    ]

    const handlePrice = (e) => {

        handleFilters(prices[e.target.value]['value'])
    }
    return (
        <div className="flex flex-col mt-4">
            {prices && prices.map((price, i) => (
                <Fragment key={price.value}>
                    <div className="mt-4">
                    <label  htmlFor={`${i}-${price.name}`}>
                        <input
                            onChange={handlePrice}
                            className="mx-3" 
                            type="radio"
                            name="price" 
                            id={`${i}-${price.name}`} 
                            value={i}
                        />
                        {price.name}
                    </label>
                    </div>
                    <div>
                    </div>
                </Fragment>
            ))}

        </div>
    )
}

export default FilterByPrice;
