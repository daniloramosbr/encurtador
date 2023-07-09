/* eslint-disable react/prop-types */
import "./modal.css";

function Modal({ exitModal, api }) {
  async function Copy() {
    await navigator.clipboard.writeText(api.link);
    alert("link copiado com sucesso!");
  }

  return (
    <div className="container-modal">
      <div className="main-modal">
        <div className="header">
          <input type="text" value="LINK ENCURTADO:" className="inputmodal" />
          <button onClick={exitModal} type="button">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className="url">{api.long_url}</div>
        <div className="inputdiv" onClick={Copy}>
          <input type="text" value={api.link} className="inputmodal" />
          <button className="buttmod" type="button">
            <ion-icon className="iconn" name="copy-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
