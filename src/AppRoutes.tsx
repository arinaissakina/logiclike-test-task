import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CoursesListPage } from "./pages/CoursesListPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CoursesListPage />} />
      <Route
        path="/error"
        element={<div>В данный момент сервис не доступен</div>}
      />
    </Routes>
  );
}

export default AppRoutes;
