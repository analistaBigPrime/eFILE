import React from 'react';

const Config = () => {
    return (
        <div className="page__config">
            <div>
                <div className="content__head">
                    <ul className="breadcrams">
                        <li className="breadcrumbs__item">
                            <a href="./index.html">Dashboard</a>
                        </li>
                        <li className="breadcrumbs__item">Configuración</li>
                    </ul>
                </div>
                <div className="content__head s_mb_24">
                    <div className="box__cols">
                        <div className="box__col">
                            <h1 className="page__title">Configuración y Drivers</h1>
                        </div>
                    </div>
                </div>
                <div className="content__text">
                    <div className="content__box s_mb_0">
                        <div className="table-wrap table-wrap_paging_no">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Detalle</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Configurar correo de bienvenida</td>
                                        <td><a href="#">Editar</a></td>
                                    </tr>
                                    <tr>
                                        <td>Configurar parámetros de API</td>
                                        <td><a href="#">Editar</a></td>
                                    </tr>
                                    <tr>
                                        <td>Configurar certificado de agente automatizado</td>
                                        <td><a href="#">Editar</a></td>
                                    </tr>
                                    <tr>
                                        <td>BigSigner para Windows de 64 bits</td>
                                        <td><a href="#">Descargar</a></td>
                                    </tr>
                                    <tr>
                                        <td>BigSigner para MAC</td>
                                        <td><a href="#">Descargar</a></td>
                                    </tr>
                                    <tr>
                                        <td>Drive para DNI Electrónico</td>
                                        <td><a href="#">Descargar</a></td>
                                    </tr>
                                    <tr>
                                        <td>BigSigner para Windows de 32 bits</td>
                                        <td><a href="#">Descargar</a></td>
                                    </tr>
                                    <tr>
                                        <td>Configurar correo Electrónico</td>
                                        <td>
                                            <input type="checkbox" id="email" name="email" />
                                            <label htmlFor="email" className="s_mb_0">&nbsp;</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Enviar correo con documentos firmados</td>
                                        <td>
                                            <input type="checkbox" id="signed" name="signed" />
                                            <label htmlFor="signed" className="s_mb_0">&nbsp;</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Enviar correo al firmante de planillas</td>
                                        <td>
                                            <input type="checkbox" id="signer-forms" name="signer-forms" />
                                            <label htmlFor="signer-forms" className="s_mb_0">&nbsp;</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Config;