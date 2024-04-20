import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div>
      <table>
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
            <Link to="/addblog" className="menu-items">
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
            <Link to="/logout" className="menu-items">
              Logout
            </Link>
          </td>
        </tr>

        <tr>
          <td style={{ height: "400px" }}></td>
        </tr>
      </table>
    </div>
  );
}

export default MenuBar;
