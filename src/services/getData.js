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
// chamadas apis series
// Pega vídeos da série (data.results)
export async function getSeriesVideos(seriesId) {
  const {
    data: { results },
  } = await api.get(`/tv/${seriesId}/videos`);
  return results;
}

// Pega créditos principais da série (data)
export async function getSeriesCredits(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}/credits`);
  return data;
}

// Pega séries similares (data)
export async function getSeriesSimilar(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}/similar`);
  return data;
}

// Pega créditos agregados da série (data)
export async function getSeriesCreditosPrin(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}/aggregate_credits`);
  return data;
}

// Pega detalhes da série (data)
export async function getSeriesDetalhes(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}`);
  return data;
}
