import React, { useContext, useEffect } from 'react';
import LoginContext from "../../context/login/LoginContext";
import { Link } from "react-router-dom";


const Hader = () => {
	const { infoCompany, user, getUserAuth, signOff, getCompany } = useContext(LoginContext);
	useEffect(() => {
		getUserAuth();
		getCompany();
		// eslint-disable-next-line
	}, [])

	return (
		<header>
			<div className="wrap">
				<Link to="/" className="logo">
					{infoCompany ? <img className="header__logo" src={infoCompany.logo} alt={`Logo de ${infoCompany}`} width="119px" height="32px"/> : <span className="logo-efile">eFILE</span>}
				</Link>
				<div className="header__info">
					<Link to="/notifications" className="header__notification header__notification-active"></Link>
					<div className="header__user">
						<div className="header__user-photo" />
						<div className="header__user-info">
							{
								user ? 
									<ul className="header__user-data">
										<li className="s_mb_8">
											<strong>{`${user.name} ${user.last_name}`}</strong>
										</li>
										<li>{user.dni}</li>
										<li><a href="mailto:analista1@bigprime.pe">{user.email}</a>
										</li>
									</ul>
								: null 
							}
							<ul className="header__user-nav">
								<li>
									<Link className="header__user-link header__user-link_type_profil" to="/profile">Mi Perfil</Link>
								</li>
								<li>
									<Link className="header__user-link header__user-link_type_logout" to="/login" onClick = {()=> signOff()}>Cerrar sesión</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Hader;