import { useState } from "react";
import MenuBar from "../components/menuBar";
import axios from "axios";
import { data } from "../config";

function SearchBlog() {
  const [fullName, setName] = useState("");
  const [result, setBlogs] = useState([]);

  const search = async () => {
    const response = await axios.post(data.urlServer + "/blogs/searchblogs", {
      fullName,
    });
    if ((response.status = "Success")) {
      setBlogs(response.data.data);
    }
  };

  return (
    <div>
      <h1 className="page-title">Search Blog</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-3"></div>
            <div className="col">
              <div className="centered">
                <h5 className="mt-2">Search By Owner Name</h5>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <button className="btn btn-success mt-3" onClick={search}>
                  Find Blogs
                </button>
              </div>
            </div>

            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
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
                        <td>{blog.contents}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBlog;
