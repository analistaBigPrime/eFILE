import React, { useContext, useEffect, useState } from "react";
import RelasesContext from "../../../context/relases/RelasesContext";
import { Link, useLocation } from "react-router-dom";
import { getIdPathname } from "../../../helpers";
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { backendUrl } from '../../../config/env';

const Relase = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = getIdPathname(pathname);

  const { documentRelase, showDocumentRelase } = useContext(RelasesContext);

  useEffect(() => {
    document.title = "Docuemento";
    showDocumentRelase(id);
    // eslint-disable-next-line
  }, [documentRelase]);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!documentRelase) return null;
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
              {
                documentRelase.signersValidation.map((user) => (
                  <Accordion expanded={expanded === user.dateSign} onChange={handleChange(user.dateSign)}>
                    <AccordionSummary><h3 className="accordion__ico accordion__ico_type_from">{user.signer}</h3></AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <p><strong>Información del firmante</strong></p>
                        <dl className="mails__list">
                          <dt>Autoridad de certificación:</dt>
                          <dd>{user.issuerCertificate}</dd>
                          <dt>vfecha y hora de firma:</dt>
                          <dd>{user.dateSign}</dd>
                        </dl>
                        <p><strong>Validación de firma</strong></p>
                        <dl className="mails__list">
                          <dt>Integridad:</dt>
                          <dd>{user.signValidation}</dd>
                          <dt>Confianza:</dt>
                          <dd>{user.signTrust}</dd>
                          <dt>Revocación:</dt>
                          <dd>{user.signRevocationStatus}</dd>
                          <dt>Vigencia:</dt>
                          <dd>{user.signValidityStatus}</dd>
                        </dl>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))
              }
            </div>
          </div>
        </div>
        <div className="content__box">
          <div className="content__box-title">Previsualización</div>
          <div className="content__box-inner">
            <iframe height="800" src = { backendUrl() + documentRelase.urlShowDocumet} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relase;

