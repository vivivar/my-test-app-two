/* 
Viviana Vargas
Feb-19th
Interview Test for GitHub, APIs and MUI
*/

import axios from 'axios';

// APIS' BASE URLS

const NASA_API_BASE_URL = 'https://api.nasa.gov/planetary/apod';
const DOG_API_BASE_URL = 'https://dog.ceo/api';
const NEWS_API_BASE_URL = 'https://newsapi.org/v2/top-headlines';

// NASA API KEY
const NASA_API_KEY = 'DyYZtokOnfiPlKIYJDCx0meLPaNZeBhOJzowSrUF';

// NEWS API KEY
const NEWS_API_KEY = '77ba2990d69449518f1761a1529a637c';

// Fetch data from the NASA API
export async function fetchNASAData() {
  try {
    const response = await axios.get(`${NASA_API_BASE_URL}?api_key=${NASA_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from NASA API:', error.message);
    throw error;
  }
}

// Fetch data from Dog CEO's Dog API
export async function fetchDogData() {
  try {
    const response = await axios.get(`${DOG_API_BASE_URL}/breeds/image/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Dog CEO\'s Dog API:', error.message);
    throw error;
  }
}

// Fetch top headlines from News API
export async function fetchNewsData() {
  try {
    const response = await axios.get(`${NEWS_API_BASE_URL}?apiKey=${NEWS_API_KEY}&country=us`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching data from News API:', error.message);
    throw error;
  }
}

