import MenuBar from "../components/menuBar";

function MyBlogs() {
  return (
    <div>
      <h1 className="page-title">My Blogs</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10"></div>
      </div>
    </div>
  );
}

export default MyBlogs;
