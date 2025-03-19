import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY; 
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

export const fetchFood = async (query) => {
    const res = await axios.get(`${BASE_URL}?query=${encodeURIComponent(query)}&apiKey=${apiKey}`)
    return res.data.results;
}

