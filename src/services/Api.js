
const API_BASE_URL = "http://localhost:8080/api";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmFvQHlvcG1haWwuY29tIn0.Nt5fH12R3a1Czsi1EE3Mp9AZJDHRyOxil4txr-L2HiI"

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
    return commonApi.request('/login', 'POST', { username, password });
  },

  register(name, email, password) {
    return commonApi.request('/register', 'POST', { name, email, password });
  },

  uploadFile(formData) {
    return commonApi.requestMultipart('/file/upload', 'POST', formData);
  },


  getUploadedData() {
    return commonApi.request('/file/getAll');
  },
};

export default commonApi;
