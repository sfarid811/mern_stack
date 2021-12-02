import {API_PRODUCT} from '../../config';



export const filterProducts = async (skip, limit, filters) => {

    const data = {
      skip,
      limit,
      filters
    }
  
  return await fetch(`${API_PRODUCT}/search`, {
       method: "POST",
       headers: {
           "Accept": "application/json",
           "Content-Type": "application/json"
       },
       body: JSON.stringify(data)
   })
   .then(res => res.json())
   .then(res => res.products)
   .catch(err => console.error(err))
  
  }