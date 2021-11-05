import React from 'react';
import Products from './Products';
import FilterShop from './FilterShop';

const Shop = () => {
    return (
        <div className="max-w-7xl mx-auto py-32">
        <div className="flex md:flex-col sm-flex-col">
          <div className="w-1/3 bg-indigo-100 mr-2 sm:w-full sm:mb-12">
              <FilterShop />

          </div>
          <div className="w-2/3 sm:w-full">
            <div className="">
              <Products />
            </div>
          </div>
  
        </div>
      </div>
    )
}

export default Shop
