import axios from "axios";

const API_URL = "https://dummyjson.com/users";

export const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.users;
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};