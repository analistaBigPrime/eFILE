import React from 'react';
import { Link } from "react-router-dom";

const Tr = ({ relase }) => {
    const { id, name, periodDate, createdAt, state } = relase;

    let link;
    if (state === 'Finalizado') {
        link = <Link to={`/comunicados/send-email/${id}`} className="workflow__btn workflow__btn_ico_view" />
    } else if (state === 'Iniciado') {
        link = <Link to={`/comunicados/view-pdf/${id}`} className="workflow__btn workflow__btn_ico_view" />
    } else {
        link = null
    }

    return (
        <tr>
            <td>{periodDate}</td>
            <td>{name}</td>
            <td>
                {state === 'Finalizado' ? <div className="bage bage_color_green">Finalizado</div> : <div className="bage">{state}</div>}
            </td>
            <td>{createdAt}</td>
            <td>{link}</td>
        </tr>
    );
}

export default Tr;