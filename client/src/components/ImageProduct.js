import React from 'react';
//import {API_URL} from '../api/config';


const API_URL = 'http://localhost:8000/api/product'

const ImageProduct = ({item, url}) => {
    return (
        <div>
             <img src={`${API_URL}/${url}/${item._id}`} className="h-96 w-full object-cover"/>
           
        </div>
    )
}

export default ImageProduct
