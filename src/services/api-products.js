// api-users.js
import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (pageSize, searchValue, currentPage) => {
  try {
    // Construct the API request URL based on your API documentation
    const url = `${API_URL}?limit=${pageSize}&skip=${currentPage}`;

    // Make the Axios GET request
    const response = await axios.get(url);

    // Return the data from the response
    const res = response.data.products;
    console.log(res);
    return res;
  } catch (error) {
    // Handle errors here, e.g., log the error or show an error message
    console.error('Error fetching users:', error);
    throw error;
  }
};
