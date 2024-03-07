const axios = require('axios');

class HttpClient {
  async get(url) {
    try {
      const response = await axios.get(url);
      return {
        status: response.status,
        data: response.data
      };
    } catch (error) {
      return {
        status: error.response.status,
        data: error.response.data
      };
    }
  }

  async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return {
        status: response.status,
        data: response.data
      };
    } catch (error) {
      return {
        status: error.response.status,
        data: error.response.data
      };
    }
  }
}

module.exports = { HttpClient };
