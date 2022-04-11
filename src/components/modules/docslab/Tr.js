import React from 'react';
import { Link } from "react-router-dom";

const Tr = ({ doclab }) => {
    const { id, name, periodDate, createdAt, typeProcessName, state } = doclab;
    return (
        <tr>
            <td>{periodDate}</td>
            <td>{typeProcessName}</td>
                <td>{name}</td>
                <td>
                    {state === 'Finalizado' ? <div className="bage bage_color_green">Finalizado</div> : <div className="bage">{state}</div>}
                </td>
                <td>{createdAt}</td>
                <td>
                    <Link to={`/comunicados/send-email/${id}`} className="workflow__btn workflow__btn_ico_view"/>
                </td>
        </tr>
    );
}

export default Tr;