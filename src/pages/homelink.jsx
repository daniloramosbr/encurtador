import "./homelinks.css";
import { Link } from "react-router-dom";

function HomeLink() {
  return (
    <div className="menu">
      <Link className="link" to="/links">
        <ion-icon name="analytics-outline"></ion-icon> MEUS LINKS
      </Link>
    </div>
  );
}
export default HomeLink;
