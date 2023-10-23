import { Navigate } from 'react-router-dom'; 
const API_BASE_URL = "http://localhost:8080/api";

const token = localStorage.getItem('token');

  if (!token) {
    // If token is not present, redirect to the login page
     <Navigate to="/" />;
  }
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API request failed');
  }

  return response.json();
};
const commonApi = {
  async request(url, method = 'GET', data = null, headers = {}) {
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        ...headers,
      },
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw error;
    }
  },

  async requestMultipart(url, method = 'POST', data = null, headers = {}) {
    const requestOptions = {
      method,
      headers: {
        'Authorization': token,
        ...headers,
      },
      body: data,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, requestOptions);
      return handleResponse(response);
    } catch (error) {
      throw error;
    }
  },

  login(username, password) {
    return commonApi.request('/user/login', 'POST', { username, password });
  },

  register(data) {
    return commonApi.request('/user/register', 'POST', data);
  },

  uploadFile(formData) {
    return commonApi.requestMultipart('/file/upload', 'POST', formData);
  },


  getUploadedData() {
    return commonApi.request('/file/getAll');
  },
};

export default commonApi;
