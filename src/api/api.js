import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchOCR = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await api.post("/ocr", formData);
  return response.data;
};

export default api;
