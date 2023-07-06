import { Link } from "react-router-dom";

function LinksBack() {
  return (
    <div className="menu-arrow">
      <Link className="arrow" to="/">
        <ion-icon name="arrow-back-outline"></ion-icon> VOLTAR
      </Link>
    </div>
  );
}
export default LinksBack;
