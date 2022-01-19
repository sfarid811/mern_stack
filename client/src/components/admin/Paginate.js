import React from "react";
import {Link} from 'react-router-dom';


const Paginate = ({ numberOfPages, currentPage, setCurrentPage, gotoPrevious, gotoNext }) => {

 
  return (
    <div>
      <ul className="flex">
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
          <Link className="flex items-center font-bold" to="/admin/products">
            <span className="mx-1" onClick={gotoPrevious}>
              previous
            </span>
          </Link>
        </li>

        {numberOfPages.map((pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className="bg-gray-200 p-2 mr-2 rounded"
          >
            {pageIndex + 1}
          </button>
        ))}
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <Link className="flex items-center font-bold" to="/admin/products">
            <button className="mx-1" onClick={gotoNext}>
              Next
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
