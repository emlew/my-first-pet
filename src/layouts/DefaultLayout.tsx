import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
