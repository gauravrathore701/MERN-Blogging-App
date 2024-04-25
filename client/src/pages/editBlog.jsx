import axios from "axios";
import MenuBar from "../components/menuBar";
import { data } from "../config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function EditBlog() {
  const { state } = useLocation();
  const { blogId } = state;

  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category_id, setCategoryId] = useState("1");

  const navigate = useNavigate();

  const loadCategories = async () => {
    const category = await axios.get(
      data.urlServer + "/category/allcategories"
    );
    setCategory(category.data.data);
  };

  const updateBlog = async () => {
    const response = await axios.post(data.urlServer + "/blogs/updateblog", {
      title,
      contents,
      category_id,
      blogId,
    });
    if (response.data.status === "Success") {
      toast.success("Blog Updated");
      navigate("/myblogs");
    } else {
      toast.error("Error");
    }
  };

  const getBlogData = async () => {
    const response = await axios.post(data.urlServer + "/blogs/blogbyid", {
      blogId,
    });
    if (response.data.status === "Success") {
      setTitle(response.data.data[0].title);
      setContents(response.data.data[0].contents);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h1 className="page-title">Create Blog</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="form">
                <div className="label">Title</div>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />

                <div className="label">Content</div>
                <textarea
                  rows="3"
                  className="form-control"
                  onChange={(e) => {
                    setContents(e.target.value);
                  }}
                  value={contents}
                ></textarea>

                <label for="category" className="mt-2">
                  Category:
                </label>
                <select
                  className="dropdown"
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                  }}
                >
                  {category.map((option) => (
                    <option value={option.id}>{option.title}</option>
                  ))}
                </select>
              </div>

              <div className="centered">
                <button className="btn btn-success mt-3" onClick={updateBlog}>
                  Save Blog
                </button>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
