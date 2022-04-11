import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../context/login/LoginContext";
import DashboardContext from "../../context/dashboard/DashboardContext";

const Home = () => {
  const { user } = useContext(LoginContext);
  const { getDashboard, dashboardData } = useContext(DashboardContext);

  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line
  }, []);

  if (!user || !dashboardData) return null;

  document.title = `Bienvenido ${user.name}`;

  return (
    <div className="page__dashboard">
      <div class="content__head s_mb_8">
        <div class="box__cols">
          <div class="box__col page__mails">
            <h1 class="page__title">Mis Documentos</h1>
          </div>
        </div>
      </div>

      <div class="content__text">
        <div class="content__box s_mb_8 mails__row_paging_no content__box_paging_no">
          {
            dashboardData.Documents.map((document) => (
              <Link key={document.id} to={`/document/${document.id}`} class="mails__row">
                <div class="mails__col mails__ico-mail"></div>
                <div class="mails__col mails__name">
                  <span class="mails__name_type_subj">Javier Silva Saavedra</span>
                  <span class="mails__name_type_desc">{document.emailSubject}</span>
                </div>
                <div class="mails__col mails__ico-bage">
                  <div class="bage bage_size_big bage__dotted bage__dotted_color_red">Releases</div>
                </div>
                <div class="mails__col mails__ico-bookmark"></div>
                <div class="mails__col mails__date">
                  28 Jul
                  <span class="mails__size">2 MB</span>
                </div>
              </Link>
            ))
          }
        </div>

        <p class="text_align_r"><Link to="/documents">Ver todos</Link></p>
      </div>

      <div class="content__text">

        <div class="box__cols">
          <div class="box__col page__announcements">
            <h1 class="page__title s_mb_8">Lista de Comunicados enviados</h1>

            <div class="content__box s_mb_8 content__box_paging_no">
              <div class="table-wrap table-wrap_paging_no">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Periodo</th>
                      <th>Nombre</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      dashboardData.Comunicados.map((release) => (
                        <tr key={release.id}>
                          <td>{release.periodDate}</td>
                          <td>{release.name}</td>
                          <td>
                            <div class="bage bage_color_green">Finalizado</div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <p class="text_align_r"><Link to="/comunicados">Ver todos</Link></p>
          </div>

          <div class="box__col page__docs">
            <h1 class="page__title s_mb_8">Lista de Documentos laborales</h1>

            <div class="content__box s_mb_8 content__box_paging_no">
              <div class="table-wrap table-wrap_paging_no">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Periodo</th>
                      <th>Tipo de proceso</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      dashboardData.DocLaboral.map((doclab) => (
                        <tr key={doclab.id}>
                          <td>{doclab.periodDate}</td>
                          <td>{doclab.name}</td>
                          <td>
                            <div class="bage bage_color_green">Finalizado</div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

            <p class="text_align_r"><Link to="/doclaboral">Ver todos</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
