import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API + "api/accounts";



export const getData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };
  
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API}api`,
    headers
  })
  
  export default api;
