import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detalhe";
import DetailSeries from "../containers/DetalheSeries";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/movie/:id" element={<Detail />} />
        <Route path="/detalhe/tv/:id" element={<DetailSeries />} />
      </Route>
    </Routes>
  );
}
export default Router;
