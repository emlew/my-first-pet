import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
