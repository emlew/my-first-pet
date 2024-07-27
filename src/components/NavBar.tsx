import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <Box id="navbar">
      <NavLink id="navlink" to={"/info"}>
        {"Info"}
      </NavLink>
      <NavLink id="navlink" to={"/quiz"}>
        {"Quiz"}
      </NavLink>
    </Box>
  );
};
