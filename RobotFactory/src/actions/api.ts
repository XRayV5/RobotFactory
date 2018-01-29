import axios, { AxiosError, AxiosResponse } from "axios";
const API_BASE_URL = "http://localhost:3000";

const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
  } else {
    console.error(error.message);
  }
};

export const fetchRobotsAPI = () =>
  axios
    .get(`${API_BASE_URL}/robots`)
    .then(handleResponse)
    .catch(handleError);

export const extinguishFireAPI = (id: string) =>
  axios.post(`${API_BASE_URL}/robots/${id}/extinguish`).catch(handleError);

export const recycleBotsAPI = (recycleRobots: string[]) =>
  axios
    .post(`${API_BASE_URL}/robots/recycle`, { recycleRobots })
    .catch(handleError);

export const sendShipmentAPI = (shipment: string[]) => axios.put(`${API_BASE_URL}/shipments/create`, { shipment }).catch(handleError);