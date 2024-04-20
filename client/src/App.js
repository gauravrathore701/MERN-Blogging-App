import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";
import RegisterUser from "./pages/registerUser";
import MenuPage from "./pages/menuPage";
import BlogDetails from "./pages/blogDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/menuBoard" element={<MenuPage />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
