import HomeLink from "./homelink";
import Modal from "./modal";
import { useState } from "react";
import api from "./services/api";

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
      console.log(res);
    } catch (error) {
      alert("ops parece que algo deu errado");
    }
  }
  return (
    <div className="container-home">
      <div className="main">
        <div className="logo">
          <img src="./dist/assets/logo.png" alt="logo" />
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
          <button onClick={ButtonEncurt}>GERAR LINK</button>
        </div>
      </div>
      <HomeLink />
      {modal ? (
        <Modal
          api={resApi}
          exitModal={() => {
            setModal(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Home;
