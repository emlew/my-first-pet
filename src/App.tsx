import "./App.css";
import { AppRouter } from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

export const App: React.FC = () => {
  // TODO: add consistent styling to colors, buttons, fonts
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
