import MenuBar from "../components/menuBar";

function CreateBlog() {
  return (
    <div>
      <h1 className="page-title">Create Blog</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
        <div className="col-10"></div>
      </div>
    </div>
  );
}

export default CreateBlog;
