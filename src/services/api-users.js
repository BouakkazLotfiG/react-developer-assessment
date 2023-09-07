// api-users.js
import axios from 'axios';

const API_URL = 'https://dummyjson.com/users';

export const fetchUsers = async (
  pageSize,
  currentPage,
  genderFilter,
  firstNameFilter,
  emailFilter,
  birthdayFilter
) => {
  try {
    const limit = pageSize;
    const skip = (currentPage - 1) * pageSize;

    let queryParam = '';
    if (genderFilter) {
      queryParam = genderFilter
        ? `/filter?key=gender&value=${genderFilter}`
        : '';
    } else if (firstNameFilter) {
      queryParam = firstNameFilter
        ? `/filter?key=firstName&value=${firstNameFilter}`
        : '';
    } else if (emailFilter) {
      queryParam = emailFilter ? `/filter?key=email&value=${emailFilter}` : '';
    } else if (birthdayFilter) {
      queryParam = birthdayFilter
        ? `/filter?key=birthDate&value=${birthdayFilter}`
        : '';
    }

    const separator =
      firstNameFilter || genderFilter || emailFilter || birthdayFilter
        ? '&'
        : '?';

    const url = `${API_URL}${queryParam}${separator}limit=${limit}&skip=${skip}`;

    // Make the Axios GET request
    const response = await axios.get(url);

    // Return the data from the response
    const res = response.data;

    return res;
  } catch (error) {
    // Handle errors here, e.g., log the error or show an error message
    console.error('Error fetching users:', error);
    throw error;
  }
};
