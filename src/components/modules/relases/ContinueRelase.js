import React, { useContext, useEffect, useState } from "react";
import RelasesContext from "../../../context/relases/RelasesContext";
import { Link, useLocation, useHistory } from "react-router-dom";
import { getIdPathname } from "../../../helpers";
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';


const Relase = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = getIdPathname(pathname);
  const history = useHistory();

  const { redirectRelases, relase, getUsersRelase, cancelProcessRelase, getRelase } = useContext(RelasesContext);

  useEffect(() => {
    document.title = "Vista Previa";
    getRelase(id)
    getUsersRelase(1)
    if (redirectRelases) {
      history.push('/comunicados')
    }
    // eslint-disable-next-line
  }, [redirectRelases]);

  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!relase) return null;
  return (
    <div className="page__announcements">
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">Resultados de validación de firma</li>
        </ul>
      </div>
      <div className="content__head">
        <div className="box__cols">
          <div className="box__col">
            <h1 className="page__title">Resultados de validación de firma</h1>
            <p>Verifique la información de la firma digital en el documento.</p>
          </div>
        </div>
      </div>
      <div className="content__text">
        <div className="content__box">
          <div className="content__box-title">Lista de firmantes</div>
          <div className="content__box-inner">
            <div className="accordion">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary>
                  <h3 className="accordion__ico accordion__ico_type_from">William Axl Rose</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p><strong>Información del firmante</strong></p>
                  <dl className="docs__list">
                    <dt>Autoridad de certificación:</dt>
                    <dd>Llama.pe SHA834 Standar CA</dd>
                    <dt>vfecha y hora de firma:</dt>
                    <dd>(10:18:38 AM) - Sabado 17 de julio de 2021</dd>
                  </dl>
                  <p><strong>Validación de firma</strong></p>
                  <dl className="docs__list">
                    <dt>Integridad:</dt>
                    <dd>La firma criptográfica es válida.</dd>
                    <dt>Confianza:</dt>
                    <dd>El certificado de firmantes es de confianza.</dd>
                    <dt>Revocación:</dt>
                    <dd>La ruta de certificación no se encuentra revocada</dd>
                    <dt>Vigencia:</dt>
                    <dd>El certificado se encontraba vigente al momento de firmar.</dd>
                  </dl>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'pane2'} onChange={handleChange('panel2')}>
                <AccordionSummary>
                  <h3 className="accordion__ico accordion__ico_type_from">William Axl Rose</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p><strong>Información del firmante</strong></p>
                  <dl className="docs__list">
                    <dt>Autoridad de certificación:</dt>
                    <dd>Llama.pe SHA834 Standar CA</dd>
                    <dt>vfecha y hora de firma:</dt>
                    <dd>(10:18:38 AM) - Sabado 17 de julio de 2021</dd>
                  </dl>
                  <p><strong>Validación de firma</strong></p>
                  <dl className="docs__list">
                    <dt>Integridad:</dt>
                    <dd>La firma criptográfica es válida.</dd>
                    <dt>Confianza:</dt>
                    <dd>El certificado de firmantes es de confianza.</dd>
                    <dt>Revocación:</dt>
                    <dd>La ruta de certificación no se encuentra revocada</dd>
                    <dt>Vigencia:</dt>
                    <dd>El certificado se encontraba vigente al momento de firmar.</dd>
                  </dl>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="content__box">
          <div className="content__box-title">Previsualización</div>
          <div className="content__box-inner">
            <iframe height={800} src="https://spishu.ru/Zarabotok-na-partnerskih-programmah.pdf" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relase;

