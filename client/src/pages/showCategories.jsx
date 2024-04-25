import axios from "axios";
import MenuBar from "../components/menuBar";
import { data } from "../config";
import { useEffect, useState } from "react";

function ShowCategories() {
  const [result, setCategory] = useState([]);

  const loadCategories = async () => {
    const response = await axios(data.urlServer + "/category/allcategories");
    setCategory(response.data.data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h1 className="page-title">Show Categories</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10">
          <table className="table table-striped">
            <thead>
              <th>User ID</th>
              <th>Title</th>
              <th>Category Name</th>
            </thead>
            <tbody>
              {result.map((blog) => {
                return (
                  <tr>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.description}</td>
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

export default ShowCategories;
