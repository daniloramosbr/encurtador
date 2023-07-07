/* eslint-disable react/jsx-key */
import "./links.css";
import { useState, useEffect } from "react";
import LinksBack from "./linksback";
import { GetLink } from "./services/storagelink";
import Modal from "./modal";
import { DeleteLink } from "./services/storagelink";

function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [text, setText] = useState("VOCÊ AINDA NÃO TEM LINKS");

  useEffect(() => {
    //quando tiver vazio, carregando executa a funçao
    async function GettLinks() {
      const result = await GetLink("@DanDev"); //procura no getLinks quais ja tem

      setMyLinks(result); //MANDA RES DA API PRO SET
      if (result != 0) {
        setText("MEUS LINKS:");
      }
    }

    GettLinks();
  }, []);

  function OpenModal(link) {
    setModal(true);
    setData(link);
  }
  async function Delete(id) {
    const res = await DeleteLink(myLinks, id);
    setMyLinks(res);
    if (res == 0) {
      setText("VOCÊ AINDA NÃO TEM LINKS");
    }
  }

  return (
    <div className="container-links">
      <div className="main-links">
        <div className="text">{text}</div>
        {myLinks.map((link) => (
          <div className="input-links">
            <div className="input-icon">
              <ion-icon name="analytics-outline"></ion-icon>
              <input
                onClick={() => OpenModal(link)}
                value={link.long_url}
                type="text"
              />
              <button
                onClick={() => Delete(link.iNd)}
                className="deleteicon"
                type="button"
              >
              
                <ion-icon name="trash-outline" className="icon"></ion-icon>
              </button>
            </div>
          </div>
        ))}
      </div>
      <LinksBack />
      {modal && (
        <Modal
          exitModal={() => {
            setModal(false);
          }}
          api={data}
        />
      )}
    </div>
  );
}
export default Links;
