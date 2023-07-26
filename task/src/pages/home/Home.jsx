import "./home.scss";
import Folder from "../../components/folder/Folder";

export default function Home() {
  return (
    <div className="home">
      <h1>Multiple files upload</h1>
      <div className="foldersContainer">
        <Folder name="Folder 1" />
        <Folder name="Folder 2" />
        <Folder name="Folder 3" />
      </div>
      ;
    </div>
  );
}
