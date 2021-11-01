import React from 'react';
//import {API_URL} from '../api/config';


const API_URL = 'http://localhost:8000/api/product'

const ImageProduct = ({item, url}) => {
    return (
        <div className="flex-col">
             <img src={`${API_URL}/${url}/${item._id}`} className="h-96 w-full object-cover hover:bg-gray-200 cursor-pointer"/>
           
        </div>
    )
}

export default ImageProduct
