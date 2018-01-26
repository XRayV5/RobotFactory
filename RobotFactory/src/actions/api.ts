import axios, { AxiosError, AxiosResponse, } from 'axios';
const API_BASE_URL = 'http://localhost:3000'

const handleResponse = (response: AxiosResponse) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    return response.data
};
  
const handleError = (error: AxiosError) => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else {
        console.log(error.message);
    }
};

export const fetchRobotsAPI = () => axios.get(`${API_BASE_URL}/robots`)
    .then(handleResponse)
    .catch(handleError);