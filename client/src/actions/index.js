export const listProductsByFilter = async (
    skip = 0,
    limit = 6,
    filters = {}
  ) => {
    try {
      let response = await axios.post(`/api/products/search`, {
        skip,
        limit,
        filters,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };