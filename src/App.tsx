import "./App.css";
import { AppRouter } from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
