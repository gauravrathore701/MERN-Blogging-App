import axios from "axios";
import MenuBar from "../components/menuBar";
import { data } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const AddCategoryDB = async () => {
    const response = await axios.post(
      data.urlServer + "/category/addcategory",
      { title, description }
    );
    if (response.status === 200) {
      toast.success("Category added");
      navigate("/allblogs");
    } else {
      toast.error("Error");
    }
  };
  return (
    <div>
      <h1 className="page-title">Add Category</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-3"></div>

            <div className="col">
              <div className="centered">
                <div className="label">Category Name</div>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />

                <div className="label mt-2">Category Description</div>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />

                <button
                  className="btn btn-success mt-3"
                  onClick={AddCategoryDB}
                >
                  Save Category
                </button>
              </div>
            </div>

            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
