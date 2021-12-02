import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, currentPage,  setCurrentPage }) => {
    return (
        pages > 1 && (
            <div className="text-center h-screen">
                <ul className="flex pl-0 list-none rounded my-2">
                <li className={`page-item ${currentPage === 1 && `disabled`}`}>
				<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
					&laquo;
				</button>
			</li>
                    {[...Array(pages).keys()].map((x) => (
                        <Fragment>
                            <li className="relative block  cursor-pointer leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">
                                <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="py-2 px-3">{x + 1}</button>
                                </li>
                        </Fragment>

                    ))}

                </ul>

            </div>
        )
    )
}

export default Paginate
