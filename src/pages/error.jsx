import "./error.css";
import ErrorButton from "./errorbutton.jsx";

export default function Error() {
  return (
    <div className="container-error">
      <div className="main-error">
        <img src="./public/error.png" className="imgerror" />
        <ErrorButton />
      </div>
    </div>
  );
}
