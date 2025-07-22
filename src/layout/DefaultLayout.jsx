import Header from "../containers/Header";

import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
