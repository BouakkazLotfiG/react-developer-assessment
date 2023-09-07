import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (
  pageSize,
  currentPage,
  categoryFilter,
  titleFilter,
  brandFilter
) => {
  try {
    const limit = pageSize;
    const skip = (currentPage - 1) * pageSize;
    const categoryQueryParam = categoryFilter
      ? `/category/${categoryFilter}`
      : '';

    const searchQueryParamTitle = titleFilter ? `/search?q=${titleFilter}` : '';
    const searchQueryParamBrand = brandFilter ? `/search?q=${brandFilter}` : '';

    const separator = titleFilter || brandFilter ? '&' : '?';

    const url = `${API_URL}${categoryQueryParam}${searchQueryParamTitle}${searchQueryParamBrand}${separator}limit=${limit}&skip=${skip}`;
    console.log(url);

    // Make the Axios GET request
    const response = await axios.get(url);

    // Return the data from the response
    console.log('response', response.data);
    const res = response.data;
    console.log('res', res);
    return res;
  } catch (error) {
    // Handle errors here, e.g., log the error or show an error message
    console.error('Error fetching users:', error);
    throw error;
  }
};
