import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";
import RegisterUser from "./pages/registerUser";
import MenuPage from "./pages/menuPage";
import BlogDetails from "./pages/blogDetails";
import MyBlogs from "./pages/myBlogs";
import CreateBlog from "./pages/createBlog";
import SearchBlog from "./pages/searchBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllBlogs from "./pages/allblogs";
import AddCategory from "./pages/addCategory";
import ShowCategories from "./pages/showCategories";
import EditBlog from "./pages/editBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/menuBoard" element={<MenuPage />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/searchblogs" element={<SearchBlog />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/showcategories" element={<ShowCategories />} />
        <Route path="/editblog" element={<EditBlog />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
