import {API_PRODUCT} from '../config';
import axios from 'axios';
import {API_CATEGORY} from '../config';
import queryString from "query-string";



  export const listProductsByFilter = async (
    skip = 0,
    limit = 6,
    filters = {}
  ) => {
    try {
      let response = await axios.post(`${API_PRODUCT}/search`, {
        skip,
        limit,
        filters
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };



export const listCategories = async () => {
  try {
    let response = await axios.get(`${API_CATEGORY}/all`);
    console.log(response, "hadou");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const listProductsBySearch = async (params) => {
  const query = queryString.stringify(params);
  try {
    let response = await axios.get(`${API_PRODUCT}/search?${query}`);
    

    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;

  }
};


