import MenuBar from "../components/menuBar";

function MenuPage() {
  return (
    <div>
      <h1 className="page-title">Menu Bar</h1>
      <div className="row">
        <div className="col-2 partition">
          <MenuBar />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
