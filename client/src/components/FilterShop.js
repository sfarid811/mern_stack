import React from 'react'

const FilterShop = () => {
  return (
    <div className="max-w-7xl mx-auto py-32">
      <div className="flex">
        <div className="w-1/3 shadow:lg bg-gray-100 sm:w-full">
          <h1>Filter By Category</h1>
          <form className="flex flex-col">

            <div className="flex items-center ">
              <input type="checkbox" className="mr-2" />
              <label htmlFor="">Apartment</label>
            </div>
            <div className="flex items-center ">
              <input type="checkbox" className="mr-2" />
              <label htmlFor="">House</label>
            </div>
            <div className="flex items-center ">
              <input type="checkbox" className="mr-2" />
              <label htmlFor="">Villa</label>
            </div>

          </form>
        </div>
        <div className="w-2/3 grid grid-cols-3 gap-2 sm:grid-cols-1 sm:w-full ml-2">
          <div className="bg-red-100 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ipsam ipsa veniam, ratione incidunt dolores maiores nobis reprehenderit
            voluptas, quaerat delectus reiciendis corporis dolorum vero itaque unde
            ut corrupti tenetur?
          </div>
          <div className="bg-green-100 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ipsam ipsa veniam, ratione incidunt dolores maiores nobis reprehenderit
            voluptas, quaerat delectus reiciendis corporis dolorum vero itaque unde
            ut corrupti tenetur?
          </div>
          <div className="bg-indigo-100 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ipsam ipsa veniam, ratione incidunt dolores maiores nobis reprehenderit
            voluptas, quaerat delectus reiciendis corporis dolorum vero itaque unde
            ut corrupti tenetur?
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterShop
