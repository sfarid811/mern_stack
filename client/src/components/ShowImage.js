import React from 'react';
import { API_PRODUCT } from '../config';

const ShowImage = ({ item, url }) => {
    return (

        <div className="flex-col">
            <img src={`${API_PRODUCT}/${url}/${item._id}`} alt={`${item.name}`}

                className="h-96 w-full object-cover cursor-pointer bg-opacity-500" />

        </div>

    )
}

export default ShowImage;
