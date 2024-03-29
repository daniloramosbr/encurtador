import HomeLink from "./homelink";
import Modal from "../modal/modal";
import { useState } from "react";
import api from "../services/api";
import { SaveLink } from "../services/storagelink";

function Home() {
  const [link, setLink] = useState("");
  const [modal, setModal] = useState(false);
  const [resApi, setResApi] = useState({});

  async function ButtonEncurt() {
    try {
      const res = await api.post("/shorten", {
        long_url: link,
      });
      setModal(true);
      setLink("");
      setResApi(res.data);
      SaveLink("@DanDev", res.data);
    } catch (error) {
      alert("ops parece que algo deu errado");
      console.log(error)
    }
  }
  return (
    <div className="container-home">
      <div className="main">
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <h1>DanLinks</h1>
          <span>Cole seu link para encurtar</span>
        </div>
        <div className="input">
          <div>
            <input
              type="text"
              value={link}
              placeholder="cole seu link aqui"
              className="inputhome"
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <button onClick={ButtonEncurt}>ENCURTAR LINK</button>
        </div>
      </div>
      <HomeLink />
      {modal && (
        <Modal
          exitModal={() => {
            setModal(false);
          }}
          api={resApi}
        />
      )}
    </div>
  );
}
export default Home;
