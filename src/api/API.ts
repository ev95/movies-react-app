import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";

const axios_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const API = {
  getGeners() {
    return axios_instance.get(
      `/genre/movie/list?api_key=${apiKey}&language=en-US`
    );
  },
  getGenerById(id: number){
    return axios_instance.get(`${id}`);
  },
  getPopularMovies() {
    return axios_instance.get(`/movie/popular?language=en-US&page=1`);
  },
  getPopularSeries() {
    return axios_instance.get(`/tv/popular?language=en-US&page=1`);
  },
  getPopularPersons() {
    return axios_instance.get(`/person/popular`);
  },
};
