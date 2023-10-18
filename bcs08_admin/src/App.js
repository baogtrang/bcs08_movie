// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./page/UserPage/UserPage";
import MoviePage from "./page/MoviePage/MoviePage";
import HomeLayout from "./layout/Layout";
import FormLogin from "./page/Login/Login";
import PrivateRoute from "./layout/PrivateRoute";
import Spinner from "./components/Spinner";
import PageNotFound from "./page/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <PrivateRoute>
                <HomeLayout />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<Navigate to="/user" />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/movie" element={<MoviePage />} />
          </Route>
          <Route path="/login" element={<FormLogin />} />
          <Route path="*" element={<PageNotFound/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
