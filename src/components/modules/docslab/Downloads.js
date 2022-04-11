import React, { useContext } from "react";
import DocslabContext from "../../../context/docslab/DocslabContext";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Download = () => {

    const { docslab } = useContext(DocslabContext);

    const onClickPdf = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "ExampleFile";
        const headers = [["Periodo", "Tipo de Proceso", "Nombre", "Estado", "Creado"]];

        const data = docslab.rows.map(doclab => [doclab.periodDate, doclab.typeProcessName, doclab.name, doclab.state, doclab.createdAt]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("ExampleFile.pdf")
    };

    return (
        <div className="table__btns">
            <ReactHTMLTableToExcel
                className="link-ico link-ico_type_xls"
                id="exel"
                table="exelDocuments"
                filename="ExampleFile"
                sheet="Sheet1"
                buttonText="Descargar Excel"
            />
            <button className="link-ico link-ico_type_pdf" onClick={onClickPdf}>Descargar Pdf</button>
        </div>
    );
}

export default Download;