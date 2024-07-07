import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { InfoPage, QuizPage, StartPage } from "./pages";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<StartPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
