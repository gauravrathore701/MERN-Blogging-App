import axios from "axios";
import MenuBar from "../components/menuBar";
import { data } from "../config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function MyBlogs() {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const getBlogs = async () => {
    const response = await axios.post(data.urlServer + "/blogs/myblogs", {
      token,
    });
    if (response.data.status === "Success") {
      setResult(response.data.data);
    } else {
      toast.error("Error loading Blogs");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1 className="page-title">My Blogs</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10">
          <table className="table table-striped">
            <thead>
              <th>Blog ID</th>
              <th>Title</th>
              <th>Category Name</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {result.map((blog) => {
                return (
                  <tr>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.category}</td>
                    <td>
                      <button
                        className="btn btn-info me-2"
                        onClick={async () => {
                          navigate("/editblog", { state: { blogId: blog.id } });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={async () => {
                          await axios.post(
                            data.urlServer + "/blogs/deleteblog",
                            { id: blog.id }
                          );
                          getBlogs();
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;
