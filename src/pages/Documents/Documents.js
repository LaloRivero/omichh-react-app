import React, {useState} from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { RenderMdToHtml } from "../../components/renderMarkdownToHtml/renderMdToHtml";
import { omi } from "../../static/omi";
import { omips } from "../../static/omips"
import "./documents.css";

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(omi)
  return (
    <>
      <Navbar theme={"light"}/>
      <div className="documents">
          <div className="documents__content">
            <h2 className="documents__title">Convocatoria</h2>
            <div>
              <section>
                <button className="document__selector" onClick={() => setSelectedDoc(omi)}>OMI</button>
                <button className="document__selector" onClick={() => setSelectedDoc(omips)}>OMIPS</button>
              </section>
            </div>
            <div className="content__markdown">
              <RenderMdToHtml doc={selectedDoc}/>
            </div>
          </div>
      </div>
      <Footer theme={"light"}/>
    </>
  );
}

export default Documents;
