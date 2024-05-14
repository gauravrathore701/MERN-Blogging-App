import axios from "axios";
import MenuBar from "../components/menuBar";
import { data } from "../config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
              <th>Category Description</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {result.map((category) => {
                return (
                  <tr>
                    <td>{category.id}</td>
                    <td>{category.title}</td>
                    <td>{category.description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={async () => {
                          const response = await axios.post(
                            data.urlServer + "/category/deletecategory",
                            { category_id: category.id }
                          );
                          if (response.data.status === "success")
                            toast.warning("Category Deleted...");
                          else toast.error("Something went wrong...");
                          loadCategories();
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

export default ShowCategories;
