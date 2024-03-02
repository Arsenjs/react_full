import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErorrPage from "./pages/ErorrPage";
import { ROUTER } from "./router/router";
import QuizPage from "./pages/QuizPage";
import WeatherPage from "./pages/WeatherPage";
import UsersPage from "./pages/UsersPage";
import SingleUserPage from "./pages/SingleUserPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
        <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={<ContactPage />} />
        <Route path={ROUTER.TEST_PAGE_ROUTE} element={<TestPage />} />
        <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErorrPage />} />
        <Route path={ROUTER.QUIZ_PAGE_ROUTE} element={<QuizPage />} />
        <Route path={ROUTER.WEATHER_PAGE_ROUTE} element={<WeatherPage />} />
        <Route path={ROUTER.USERS_PAGE_ROUTE} element={<UsersPage />} />
        <Route path={ROUTER.SINGLEUSER_PAGE_ROUTE} element={<SingleUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
