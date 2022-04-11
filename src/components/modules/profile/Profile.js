import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="content__head">
                <ul className="breadcrams">
                    <li className="breadcrumbs__item">
                        <a href="./index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumbs__item">Perfil</li>
                </ul>
            </div>
            <div className="content__head">
                <div className="box__cols">
                    <div className="box__col">
                        <h1>Perfil</h1>
                        <p>Llene los datos solicitados en el formulario para poder actualizar su información</p>
                    </div>
                </div>
            </div>
            <div className="content__text">
                <div className="content__box">
                    <form className="profile__form" method="post">
                        <p><strong>DNI: 74699210</strong></p>
                        <div className="input">
                            <label name="number">Nombre</label>
                            <input type="text" name="number" id="number" disabled defaultValue="Edwin" />
                        </div>
                        <div className="input">
                            <label name="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" id="apellidos" disabled defaultValue="De La Cruz Ramos" />
                        </div>
                        <div className="input">
                            <label name="mail">Correo Electrónico</label>
                            <input type="text" name="mail" id="mail" defaultValue="analista1@bigprime.pe" />
                        </div>
                        {/* phone */}
                        <div className="profile__code">
                            <label name="code">Código de país</label>
                            <div className="select_wrap">
                                <ul className="default_option" id="code">
                                    <li>
                                        <div className="option">Seleccione</div>
                                    </li>
                                </ul>
                                <ul className="select_ul">
                                    <li>
                                        <div className="option">+1</div>
                                    </li>
                                    <li>
                                        <div className="option">+2</div>
                                    </li>
                                    <li>
                                        <div className="option">+3</div>
                                    </li>
                                    <li>
                                        <div className="option">+4</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="profile__phone">
                            <label name="phone">Teléfono</label>
                            <div className="input">
                                <input type="text" name="group" id="group" autoComplete="off" />
                                <a href="#" className="password-control" />
                            </div>
                        </div>
                        <div className="profile__lang-wrap">
                            <div className="profile__lang">
                                <label name="lang">Seleccione idioma</label>
                                <div className="select_wrap">
                                    <ul className="default_option" id="lang">
                                        <li>
                                            <div className="option">Español</div>
                                        </li>
                                    </ul>
                                    <ul className="select_ul">
                                        <li>
                                            <div className="option">Español</div>
                                        </li>
                                        <li>
                                            <div className="option">English</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <label name="autograph">Imagen de firma digitalizada</label>
                        <div className="profile__autograph">
                            <img src="./img/autograph.jpg" alt="" />
                        </div>
                        <p className="s_mb_24"><a href="#">Eliminar imagen</a></p>
                        <div className="upload-file__wrapper s_mb_24">
                            <div className="upload-file__files">
                                Foto de DNI
                            </div>
                            <input type="file" name="files" id="upload-file__input" className="upload-file__input" multiple accept="application/excel,application/vnd.ms-excel,application/x-excel,application/x-msexcel" />
                            <label className="upload-file__label" htmlFor="upload-file__input">
                                <div className="upload-file__icon">
                                    <span className="upload-file__text-ico">Arrastre su archivo</span>
                                    <span className="upload-file__text">Elegir archivo</span>
                                </div>
                            </label>
                        </div>
                        <label name="password">Ingresa tu contraseña</label>
                        <div className="input s_mb_24">
                            <input type="password" name="password" id="password" autoComplete="off" className="input__ico input__ico-password s_mb_8" />
                            <a href="#" className="password-control" />
                            <div className="form__notify">
                                <div className="form__notify-error">Debe tener al menos 7 caracteres</div>
                                <div className="form__notify-error">Debe tener al menos un caracter en mayúscula</div>
                                <div className="form__notify-error">Debe tener al menos un caracter eb minúscula</div>
                                <div className="form__notify-success">Debe tener al menos un número</div>
                            </div>
                        </div>
                        <input className="button_type_green profile__submit" type="submit" defaultValue="Ingresar" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Profile;