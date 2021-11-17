import {API_PRODUCT} from '../config';
import axios from 'axios';


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


  // export const helperProduct = async (token, userId, data) => {
  //   try {
  //     let response = await axios.post(`${API_PRODUCT}/create/${userId}`, data, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // };
  

 