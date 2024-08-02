import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { Box, Typography } from "@mui/material";

export const StartPage: React.FC = () => {
  return (
    <>
      <img className="logo" src={logoImg} alt="Pet Project Logo" />
      <Typography variant="h2">
        Pet Project: Which Pet is Right for you?
      </Typography>
      <Box className="card">
        <Link to={"quiz"}>Take the quiz!</Link>
      </Box>
      <Link to={"info"}>See all pet information</Link>
    </>
  );
};
