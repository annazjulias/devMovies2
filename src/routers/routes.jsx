import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detalhe";
import DetailSeries from "../containers/DetalheSeries";
import Pesquisa from "../containers/pesquisa";
import Artistas from "../containers/detalhePessoas";
import MoviesCatalog from "../containers/Movies";
import MoviesByGenre from "../containers/generos";
import SeriesByGenre from "../containers/generosSeries";
import SearchResults from "../containers/pesquisa";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/movie/:id" element={<Detail />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/movies/:genreId" element={<MoviesByGenre />} />
        <Route path="/movies" element={<MoviesCatalog />} />
        <Route path="/detalhe/tv/:id" element={<DetailSeries />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="detalhe/person/:id" element={<Artistas />} />
        <Route path="/tv/:genreIds" element={<SeriesByGenre />} />
        <Route path="/search" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}
export default Router;
