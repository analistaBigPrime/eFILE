import React, { useContext } from "react";
import UsersContext from "../../../context/users/UsersContext";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Downloads = () => {

    const { users } = useContext(UsersContext);
    
    const onClickPdf = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "ExampleFile";
        const headers = [["DNI", "Nombre", "Correo Electrónico", "Teléfono", "Estado", "Rol"]];

        const data = users.rows.map(user => [user.dni, user.fullName, user.email, user.phoneNumber, user.active, user.rolDisplay]);

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

export default Downloads;