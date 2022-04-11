import React from 'react';

const Workflow = () => {
    return (
        <div className="page__workflow">
            <div className="content__head">
                <ul className="breadcrams">
                    <li className="breadcrumbs__item">
                        <a href="./index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumbs__item">Workflow</li>
                </ul>
            </div>
            <div className="content__head">
                <div className="box__cols">
                    <div className="box__col">
                        <h1 className="page__title">Workflow</h1>
                    </div>
                    <div className="box__col text_align_r box__col_btns_mobile">
                        <a href="./workflow_template.html" className="button button_with_ico button_ico_conf">Gestión de plantillas</a>
                        <a href="#create" className="open-modal button button_with_ico button_type_blue button_ico_create-white">Crear nuevo</a>
                    </div>
                </div>
            </div>
            <div className="content__head">
                <form name="search" className="workflow__form">
                    <label className="workflow__label">Buscar por:</label>
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
                    <div className="workflow__date">
                        <div className="workflow__check">
                            <input type="checkbox" id="date-on" name="date-on" />
                            <label htmlFor="date-on" className="s_mb_0">Por fecha</label>
                        </div>
                        <input type="text" className="calendar workflow__calendar" id="date" name="daterange" placeholder=" _ _ / _ _ / _ _ _ _     _ _ / _ _ / _ _ _ _ " disabled />
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
                                    <th>
                                        <input type="checkbox" id="check-all" name="check-all" />
                                        <label htmlFor="check-all" className="s_mb_0 workflow__table-check">Marcar<br /> todos</label>
                                    </th>
                                    <th>Creador</th>
                                    <th>Nombre</th>
                                    <th>Estado</th>
                                    <th>Creado</th>
                                    <th>Inactividad</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="sing-1" name="sing" className="sing" />
                                        <label htmlFor="sing-1" className="s_mb_0">&nbsp;</label>
                                    </td>
                                    <td>Edwin De La Cruz Ramos</td>
                                    <td>Prueba - Edwin De La Cruz<br /> <span className="text_color_gray">Participantes: 2</span><br /> <span className="text_color_gray">Participantes: 1</span></td>
                                    <td>En proceso, esperando a Edwin De La Cruz</td>
                                    <td>30/11/21 21:28</td>
                                    <td>5 días atrás</td>
                                    <td><a href="./workflow_view.html" className="workflow__btn workflow__btn_ico_view" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="sing-2" name="sing" />
                                        <label htmlFor="sing-2" className="s_mb_0">&nbsp;</label>
                                    </td>
                                    <td>Edwin De La Cruz Ramos</td>
                                    <td>Prueba - Edwin De La Cruz<br /> <span className="text_color_gray">Participantes: 2</span><br /> <span className="text_color_gray">Participantes: 1</span></td>
                                    <td>En proceso, esperando a Edwin De La Cruz</td>
                                    <td>30/11/21 21:28</td>
                                    <td>5 días atrás</td>
                                    <td><a href="./workflow_view.html" className="workflow__btn workflow__btn_ico_view" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="sing-3" name="sing" />
                                        <label htmlFor="sing-3" className="s_mb_0">&nbsp;</label>
                                    </td>
                                    <td>Edwin De La Cruz Ramos</td>
                                    <td>Prueba - Edwin De La Cruz<br /> <span className="text_color_gray">Participantes: 2</span><br /> <span className="text_color_gray">Participantes: 1</span></td>
                                    <td>En proceso, esperando a Edwin De La Cruz</td>
                                    <td>30/11/21 21:28</td>
                                    <td>5 días atrás</td>
                                    <td><a href="./workflow_view.html" className="workflow__btn workflow__btn_ico_view" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="sing-4" name="sing" />
                                        <label htmlFor="sing-4" className="s_mb_0">&nbsp;</label>
                                    </td>
                                    <td>Edwin De La Cruz Ramos</td>
                                    <td>Prueba - Edwin De La Cruz<br /> <span className="text_color_gray">Participantes: 2</span><br /> <span className="text_color_gray">Participantes: 1</span></td>
                                    <td>En proceso, esperando a Edwin De La Cruz</td>
                                    <td>30/11/21 21:28</td>
                                    <td>5 días atrás</td>
                                    <td><a href="./workflow_view.html" className="workflow__btn workflow__btn_ico_view" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="sing-5" name="sing" />
                                        <label htmlFor="sing-5" className="s_mb_0">&nbsp;</label>
                                    </td>
                                    <td>Edwin De La Cruz Ramos</td>
                                    <td>Prueba - Edwin De La Cruz<br /> <span className="text_color_gray">Participantes: 2</span><br /> <span className="text_color_gray">Participantes: 1</span></td>
                                    <td>En proceso, esperando a Edwin De La Cruz</td>
                                    <td>30/11/21 21:28</td>
                                    <td>5 días atrás</td>
                                    <td><a href="./workflow_view.html" className="workflow__btn workflow__btn_ico_view" /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="sing-6" name="sing" />
                                        <label htmlFor="sing-6" className="s_mb_0">&nbsp;</label>
                                    </td>
                                    <td>Edwin De La Cruz Ramos</td>
                                    <td>Prueba - Edwin De La Cruz<br /> <span className="text_color_gray">Participantes: 2</span><br /> <span className="text_color_gray">Participantes: 1</span></td>
                                    <td>En proceso, esperando a Edwin De La Cruz</td>
                                    <td>30/11/21 21:28</td>
                                    <td>5 días atrás</td>
                                    <td><a href="./workflow_view.html" className="workflow__btn workflow__btn_ico_view" /></td>
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
                <div className="box__cols">
                    <div className="box__col">
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
                    <div className="box__col">
                        <button className="button button_with_ico button_ico_sing workflow__sing" disabled>Firmar selección</button>
                    </div>
                </div>
            </div>

            <div id="create" className="modal modal_type_small">
                <div className="modal__title">Crear nuevo WorkFlow</div>
                <div className="modal__content">
                    <form className="workflow__form-upload">
                        <h3>Crear nuevo Workflow en Blanco</h3>
                        <a href="./workflow_edit.html" className="button button_type_green button_with_ico button_ico_new-white">Crear en Blanco</a>
                        <div className="workflow__form-upload-sep" />
                        <h3>Crear nuevo Workflow desde una plantilla</h3>
                        <div className="workflow__form-edit">
                            <div className="workflow__form-edit-name">
                                <strong>Plantilla prueba</strong><br />
                                <span className="text_color_gray">Incluye a: De La Cruz Ramos Edwin</span>
                            </div>
                        </div>
                        <a href="./workflow_edit.html" className="button button_type_green button_with_ico button_ico_edit-white">Crear usando una plantilla</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Workflow;