import React from 'react';

const Notifications = () => {
    return (
       <div className="page__notifications">
           <div className="content__head">
                <ul className="breadcrams">
                    <li className="breadcrumbs__item">
                        <a href="./index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumbs__item">Notificaciones enviadas</li>
                </ul>
            </div>
            <div className="content__head">
                <div className="box__cols">
                    <div className="box__col">
                        <h1 className="page__title">Notificaciones enviadas</h1>
                    </div>
                </div>
            </div>
            <div className="content__head">
                <form name="search" className="notifications__form">
                    <label className="notifications__label">Buscar por:</label>
                    <div className="select_wrap">
                        <ul className="default_option">
                            <li>
                                <div className="option">Asunto</div>
                            </li>
                        </ul>
                        <ul className="select_ul">
                            <li>
                                <div className="option">Asunto</div>
                            </li>
                            <li>
                                <div className="option">Identificación</div>
                            </li>
                            <li>
                                <div className="option">Correo</div>
                            </li>
                            <li>
                                <div className="option">Teléfono</div>
                            </li>
                        </ul>
                    </div>
                    <input className="input__search" type="text" placeholder="Ingresar texto" />
                    <input className="input__search-btn" type="submit" defaultValue="Buscar" />
                    <div className="notifications__date">
                        <div className="notifications__check">
                            <input type="checkbox" id="date-on" name="date-on" />
                            <label htmlFor="date-on" className="s_mb_0">Por fecha</label>
                        </div>
                        <input type="text" className="calendar notifications__calendar" id="date" name="daterange" placeholder=" _ _ / _ _ / _ _ _ _     _ _ / _ _ / _ _ _ _ " disabled />
                    </div>
                </form>
            </div>
            <div className="content__text">
                <div className="table__btns">
                    <a href="#" className="link-ico link-ico_type_xls">Descargar Excel</a>
                    <a href="#" className="link-ico link-ico_type_pdf">Descargar Pdf</a>
                    <a href="#" className="link-ico link-ico_type_print">Imprimir</a>
                </div>
                <div className="pagination-head">
                    <div className="pagination-head__pages">1-10 de 76</div>
                    <div className="pagination-head__btn pagination-head__btn_type_prev pagination-head__btn_type_disabled" />
                    <div className="pagination-head__btn pagination-head__btn_type_next" />
                </div>
                <div className="content__box s_mb_0">
                    <div className="table-wrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Asunto</th>
                                    <th>DNI</th>
                                    <th>Fecha de notificación</th>
                                    <th>Correo enviado</th>
                                    <th>Correo rechazado</th>
                                    <th>Correo abierto</th>
                                    <th>SMS enviado</th>
                                    <th>Llamada realizada</th>
                                    <th>Contacto</th>
                                    <th>e-mail/Telefono</th>
                                    <th />
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Boleta de pago</td>
                                    <td>8734834834</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>Denis Espinoza</td>
                                    <td>denis_e@mail.ru<br /> 9872327237</td>
                                    <td><a href="./notifications_view.html" className="notivications__btn notivications__btn_ico_view" /></td>
                                    <td><a href="#" className="notivications__btn notivications__btn_ico_download" /></td>
                                </tr>
                                <tr>
                                    <td>Boleta de pago</td>
                                    <td>8734834834</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>Denis Espinoza</td>
                                    <td>denis_e@mail.ru<br /> 9872327237</td>
                                    <td><a href="./notifications_view.html" className="notivications__btn notivications__btn_ico_view" /></td>
                                    <td><a href="#" className="notivications__btn notivications__btn_ico_download" /></td>
                                </tr>
                                <tr>
                                    <td>Boleta de pago</td>
                                    <td>8734834834</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>Denis Espinoza</td>
                                    <td>denis_e@mail.ru<br /> 9872327237</td>
                                    <td><a href="./notifications_view.html" className="notivications__btn notivications__btn_ico_view" /></td>
                                    <td><a href="#" className="notivications__btn notivications__btn_ico_download" /></td>
                                </tr>
                                <tr>
                                    <td>Boleta de pago</td>
                                    <td>8734834834</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>Denis Espinoza</td>
                                    <td>denis_e@mail.ru<br /> 9872327237</td>
                                    <td><a href="./notifications_view.html" className="notivications__btn notivications__btn_ico_view" /></td>
                                    <td><a href="#" className="notivications__btn notivications__btn_ico_download" /></td>
                                </tr>
                                <tr>
                                    <td>Boleta de pago</td>
                                    <td>8734834834</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>Denis Espinoza</td>
                                    <td>denis_e@mail.ru<br /> 9872327237</td>
                                    <td><a href="./notifications_view.html" className="notivications__btn notivications__btn_ico_view" /></td>
                                    <td><a href="#" className="notivications__btn notivications__btn_ico_download" /></td>
                                </tr>
                                <tr>
                                    <td>Boleta de pago</td>
                                    <td>8734834834</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>30/11/21 21:28</td>
                                    <td>Denis Espinoza</td>
                                    <td>denis_e@mail.ru<br /> 9872327237</td>
                                    <td><a href="./notifications_view.html" className="notivications__btn notivications__btn_ico_view" /></td>
                                    <td><a href="#" className="notivications__btn notivications__btn_ico_download" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination-count">
                        <div className="pagination-count__text-main">Mostrando documentos del 11 al 20 de un total de 65 registros</div>
                        <div className="pagination-count__label">Mostrar:</div>
                        <div className="pagination-count__select">
                            <div className="select_wrap">
                                <ul className="default_option">
                                    <li>
                                        <div className="option">10</div>
                                    </li>
                                </ul>
                                <ul className="select_ul">
                                    <li>
                                        <div className="option">25</div>
                                    </li>
                                    <li>
                                        <div className="option">50</div>
                                    </li>
                                    <li>
                                        <div className="option">100</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="pagination-count__text">registros</div>
                    </div>
                </div>
                <div className="pagination">
                    <div className="pagination__btn">&lt;&lt;</div>
                    <div className="pagination__btn">&lt;</div>
                    <div className="pagination__counts">
                        <div className="pagination__count">
                            <div className="pagination__btn">1</div>
                            <div className="pagination__btn">2</div>
                            <div className="pagination__btn pagination__btn-active">3</div>
                            <div className="pagination__btn">4</div>
                            <div className="pagination__btn">5</div>
                            <div className="pagination__btn">6</div>
                            <div className="pagination__btn">7</div>
                            <div className="pagination__btn">8</div>
                            <div className="pagination__btn">9</div>
                            <div className="pagination__btn">10</div>
                            <div className="pagination__btn">11</div>
                        </div>
                    </div>
                    <div className="pagination__btn">&gt;</div>
                    <div className="pagination__btn">&gt;&gt;</div>
                </div>
            </div>
       </div>
    );
}

export default Notifications;