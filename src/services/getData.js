import api from "./api";

export async function getPopularMovies() {
  const response = await api.get("/movie/popular");
  return response.data.results;
}

export async function getTopRatedMovies() {
  const response = await api.get("/movie/top_rated");
  return response.data.results;
}

export async function getTopRatedSeries() {
  const response = await api.get("/tv/top_rated");
  return response.data.results;
}

export async function getPopularSeries() {
  const response = await api.get("/tv/popular");
  return response.data.results;
}

export async function getPopularPeople() {
  const response = await api.get("/person/popular");
  return response.data.results;
}

export async function getMoviesVideos(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  return results;
}

export async function getMoviesCredits(movieId) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);
  return cast;
}

export async function getMoviesSimilar(movieId) {
  const { data } = await api.get(`/movie/${movieId}/similar`);
  return data;
}

export async function getMoviesById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
}
