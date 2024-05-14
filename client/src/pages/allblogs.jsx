import axios from "axios";
import MenuBar from "../components/menuBar";
import { data } from "../config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AllBlogs() {
  const [result, setResult] = useState([]);

  const getBlogs = async () => {
    const response = await axios.get(data.urlServer + "/blogs/allblogs");
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
      <h1 className="page-title">All Blogs</h1>
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
            </thead>
            <tbody>
              {result.map((blog) => {
                return (
                  <tr>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.category}</td>
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

export default AllBlogs;
