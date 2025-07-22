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
// apis pessoas

export async function getPersonById(id) {
  const { data } = await api.get(`/person/${id}`);
  return data;
}

export async function getPersonCredits(id) {
  const { data } = await api.get(`/person/${id}/combined_credits`);

  return data;
}

export async function getPersonImages(id) {
  const { data } = await api.get(`/person/${id}/images`);
  return data;
}

export async function getPersonSocial(id) {
  const { data } = await api.get(`/person/${id}/external_ids`);
  return data;
}

export async function getAllMovies(page = 1) {
  const apiPage1 = (page - 1) * 2 + 1;
  const apiPage2 = apiPage1 + 1;

  try {
    const [res1, res2] = await Promise.all([
      api.get("/discover/movie", {
        params: {
          page: apiPage1,
          language: "pt-BR",
        },
      }),
      api.get("/discover/movie", {
        params: {
          page: apiPage2,
          language: "pt-BR",
        },
      }),
    ]);

    const movies = [...res1.data.results, ...res2.data.results]; // 40 filmes
    return movies;
  } catch (error) {
    console.error("Erro ao buscar filmes da API:", error);
    return [];
  }
}
export async function getMoviesByGenre(genreId, page = 1) {
  const apiPage1 = (page - 1) * 2 + 1;
  const apiPage2 = apiPage1 + 1;

  try {
    const [res1, res2] = await Promise.all([
      api.get("/discover/movie", {
        params: {
          with_genres: genreId,
          language: "pt-BR",

          page: apiPage1,
        },
      }),
      api.get("/discover/movie", {
        params: {
          with_genres: genreId,
          language: "pt-BR",

          page: apiPage2,
        },
      }),
    ]);

    return {
      results: [...res1.data.results, ...res2.data.results],
    };
  } catch (error) {
    console.error("Erro ao buscar filmes por gênero:", error);
    return { results: [] };
  }
}
export async function getSeriesByGenre(genreId, page = 1) {
  const apiPage1 = (page - 1) * 2 + 1;
  const apiPage2 = apiPage1 + 1;

  try {
    const [res1, res2] = await Promise.all([
      api.get("/discover/tv", {
        params: {
          with_genres: genreId,
          language: "pt-BR",

          page: apiPage1,
        },
      }),
      api.get("/discover/tv", {
        params: {
          with_genres: genreId,
          language: "pt-BR",

          page: apiPage2,
        },
      }),
    ]);

    return {
      results: [...res1.data.results, ...res2.data.results],
    };
  } catch (error) {
    console.error("Erro ao buscar séries por gênero:", error);
    return { results: [] };
  }
}
export async function getAllSeries(page = 1) {
  const apiPage1 = (page - 1) * 2 + 1;
  const apiPage2 = apiPage1 + 1;

  try {
    const [res1, res2] = await Promise.all([
      api.get("/discover/tv", {
        params: {
          page: apiPage1,
          language: "pt-BR",
        },
      }),
      api.get("/discover/tv", {
        params: {
          page: apiPage2,
          language: "pt-BR",
        },
      }),
    ]);

    const series = [...res1.data.results, ...res2.data.results]; // cerca de 40 séries
    return series;
  } catch (error) {
    console.error("Erro ao buscar séries da API:", error);
    return [];
  }
}

export async function searchMulti(query) {
  try {
    const response = await api.get("/search/multi", {
      params: {
        query,
        language: "pt-BR",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Erro na busca multi:", error);
    return []; // retorna array vazio em caso de erro
  }
}
