import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_URL;
const API_KEY = import.meta.env.VITE_APP_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN;
console.log(API_KEY);

const Api = {
  // Get Favorite Movies
  getListMovies: async () => {
    const response = await axios(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    const data = response.data;
    return data;
  },

  // Get Video Thumbnail
  getThumbnail: async (movieId: number) => {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    const data = response.data;
    return data;
  },

  // Get Top Rated Movies
  getTopRated: async () => {
    const response = await axios(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(response);
    const data = response.data;
    return data;
  },

  // Get TVSeries Populer
  getPopularTvSeries: async () => {
    const response = await axios(`${BASE_URL}/tv/popular?api_key=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const data = response.data;
    return data;
  },

  getDetails: async (movieId: number) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    // console.log(API_KEY);
    const data = response.data;
    return data;
  },

  // Get Actors
  getActors: async (movieId: number) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    // console.log(API_KEY);
    const data = response.data;
    return data;
  },
};

export default Api;
