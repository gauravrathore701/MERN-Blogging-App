import MenuBar from "../components/menuBar";

function SearchBlog() {
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
                <input type="text" className="form-control" />
                <button className="btn btn-success mt-3">Find Blogs</button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBlog;
