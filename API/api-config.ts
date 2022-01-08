import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
  // others defaults properties:values here
});
