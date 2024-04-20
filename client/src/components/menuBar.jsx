import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function MenuBar() {
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Link to="/myblogs" className="menu-items">
                My Blogs
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/allblogs" className="menu-items">
                All Blogs
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/addcategory" className="menu-items">
                Add Category
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/categories" className="menu-items">
                Show Categories
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/createblog" className="menu-items">
                Add Blog
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/searchblogs" className="menu-items">
                Search Blogs
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <button
                className="btn menu-items"
                onClick={() => {
                  localStorage.removeItem("token");
                  toast.warning("Logged Out");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </td>
          </tr>

          <tr>
            <td style={{ height: "400px" }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuBar;
