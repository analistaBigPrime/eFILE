import React, { useContext, useEffect, useState } from "react";
import DocumentsContext from "../../../context/documents/DocumentsContext";
import { Link, useLocation } from "react-router-dom";
import { getIdPathname } from "../../../helpers";
import { backendUrl } from '../../../config/env';
import { Modal, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

const Document = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = getIdPathname(pathname);

  const { documento, signersValidation, binaryPdf, getDocument, verifyDocument } = useContext(DocumentsContext);

  const [documentsModal, setDocumentsModal] = useState(null);

  useEffect(() => {
    document.title = 'Documento';
    if (!documento) {
      getDocument(id);
    } else {
      setDocumentsModal(documento.DocumentList.map((document) => ({ id: document.documentId, modal: false })));
    }
    // eslint-disable-next-line
  }, [documento, signersValidation, id]);

  useEffect(() => {

  }, [binaryPdf])
  
  const [signatoriesModal, setSignatoriesModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const openCloseSignatoriesModal = () => {
    setSignatoriesModal(!signatoriesModal);
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!documento || !documentsModal) return null;

  const openCloseFileModal = (documentId) => {
    // const document = documentsModal.filter(document => document.id === documentId);
    const newDocumentsModal = documentsModal.map(document =>
      document.id === documentId ? { ...document, modal: !document.modal } : document
    );
    setDocumentsModal(newDocumentsModal);
  }

  const onClickVerifyDocument = async (inboxUserId, documentId) => {
    await verifyDocument(inboxUserId, documentId);
    openCloseSignatoriesModal();
  }
  
  return (
    <div className="page__mails">
      <Modal
        open={signatoriesModal}
        onClose={openCloseSignatoriesModal}
      >
        <div className="modal">
          <div className="modal__title">Lista de firmantes</div>
          <button onClick={openCloseSignatoriesModal} className="close-modal" />
          <div className="modal__content">
            {
              signersValidation ?
                signersValidation.map((user) => (
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
                )) : null
            }
          </div>
        </div>
      </Modal>
      <div className="content__head">
        <ul className="breadcrams">
          <li className="breadcrumbs__item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to="/documents">Mis documentos</Link>
          </li>
          <li className="breadcrumbs__item">{documento.EmailSubject}</li>
        </ul>
      </div>
      <div className="content__text">
        <div className="content__box">
          <div className="mails__row mails__row-inner">
            <div className="mails__col mails__ico-back">
              <Link to="/documents">
                <img src="./assets/img/pages/mails/mails__ico-back.svg" alt="" />
              </Link>
            </div>
            <div className="mails__col mails__name">
              <span className="mails__name_type_subj">Javier Silva Saavedra</span>
              <span className="mails__name_type_desc">{documento.EmailSubject}</span>
            </div>
            <div className="mails__col mails__ico-bage">
              <div className="bage bage_size_big bage__dotted bage__dotted_color_red">Releases</div>
            </div>
            <div className="mails__col mails__date">
              28 Jul
              <span className="mails__size">2 MB</span>
            </div>
          </div>
          <div className="mails__content">
            <p>{documento.EmailContent}</p>
            {
              documento.DocumentList.map((document) => (
                <>
                  <div className="mails__attach">
                    <div className="mails__attach-name">
                      {document.fileName}<br /> <span className="mails__attach-size">2,4 MB</span>
                    </div>
                    <a href={backendUrl() + document.urlDownloadDocument} className="mails__ico mails__ico_type_download" />
                    <button onClick={() => onClickVerifyDocument(document.inboxUserId, document.documentId)} className="open-modal mails__ico mails__ico_type_info" />
                    <button onClick={() => openCloseFileModal(document.documentId)} className="open-modal mails__ico mails__ico_type_pdf" />
                  </div>
                  <Modal
                    open={documentsModal.filter(doc => doc.id === document.documentId)[0].modal}
                    onClose={() => openCloseFileModal(document.documentId)}
                    className=""
                  >
                    <div className="modal">
                      <div className="modal__title">{document.fileName}</div>
                      <button onClick={() => openCloseFileModal(document.documentId)} className="close-modal" />
                      <div className="modal__content">
                        <div className="box__cols">
                          <div className="box__col">
                            <p><strong>R08: Trabajador - Datos de boleta de pago</strong><br /> 2,4 MB</p>
                          </div>
                          <div className="box__col">
                            <p className="text_align_r">(10:18:38 AM)<br /> Sabado 17 de julio de 2021</p>
                          </div>
                        </div>
                         <div>
                            <iframe width="900" height="800" src={`data:application/pdf;base64,${document.urlShowDocument}`}/>
                         </div>
                      </div>
                    </div>
                  </Modal>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
