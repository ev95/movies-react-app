import axios from "axios";
import { GetGenersType } from "./apiTypes";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";

const axios_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// API



export const API = {
  getGeners(language: string) {
    return axios_instance.get<GetGenersType>(
      `/genre/movie/list?api_key=${apiKey}&language=${language}`
    );
  },
  getGenerFIlmsById(genreId: string | undefined, language: string){
    return axios_instance.get(`/discover/movie?api_key=${apiKey}&language=${language}&with_genres=${genreId}&page=${1}`);
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
