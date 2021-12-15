import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = () => {
    return (
        <div>
            <ul className="flex">
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg">
            <Link className="flex items-center font-bold pointer-events-none cursor-not-allowed "to="/admin/products">
                <span className="mx-1">previous</span>
            </Link>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <Link className="font-bold"  to="/admin/products">1</Link>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <Link className="font-bold"  to="/admin/products">2</Link>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <Link className="font-bold"  to="/admin/products">3</Link>
        </li>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <Link className="flex items-center font-bold" to="/admin/products">
                <span className="mx-1">Next</span>
            </Link>
        </li>
    </ul>
        </div>
    )
}

export default Paginate

