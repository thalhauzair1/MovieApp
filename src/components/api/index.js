import axios from "axios";
import { API_KEY, URL, URLTV, searchUrl } from "../../config/api_config";

const getMovies = async (listMovie) => {
    const url = URL;
    const api = API_KEY;
    try {
        const apiUrl = `${url}/${listMovie}?api_key=${api}`;
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {

        console.error("Error fetching movies:", error);
        throw error;
    }
};

const getTvShows = async (tv) => {
    const url = URLTV;
    const api = API_KEY;
    try {
        const apiUrl = `${url}/${tv}?api_key=${api}`;
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {

        console.error("Error fetching TV shows:", error);
        throw error;
    }
};

const searchList = async (search, queryParams) => {
    const url = searchUrl;
    const api = API_KEY;
    try {
        const apiUrl = `${url}/${search}?query=${queryParams}&api_key=${api}`;
        const response = await axios.get(apiUrl);
        console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.error("Error Searching", error);
        throw error;
    }
}

export { getMovies, getTvShows, searchList };
