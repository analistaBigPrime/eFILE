import React from 'react';
import { Link } from "react-router-dom";

const Tr = ({ user }) => {

    const { id, dni, fullName, email, active, rolDisplay } = user;
    
    return (
        <tr>
            <td>{dni}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>
                {active ? <div className="bage bage_color_green">Activo</div> : <div className="bage">De baja</div>}
            </td>
            {/* <td>{rolDisplay}</td> */}
            <td><Link to={`/usuarios/show/${id}`} className="workflow__btn workflow__btn_ico_view"/></td>
        </tr>
    );
}

export default Tr;