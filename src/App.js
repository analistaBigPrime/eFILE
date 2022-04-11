import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginState from "./context/login/LoginState";
import Login from "./components/login/Login";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import AlertState from "./context/alerts/AlertState";
import tokenAuth from "./config/tokenAuth";
import ResetPwd from "./components/login/ResetPwd";
import RoutePrivate from "./components/routes/RoutePrivate";
import DashboardState from "./context/dashboard/DashboardState";
import Dashboard from "./components/modules/Dashboard";
import DocumentState from "./context/documents/DocumentsState";
import Documents from "./components/modules/documents/Documents";
import Document from "./components/modules/documents/Document";
import UsersState from "./context/users/UsersState";
import Users from "./components/modules/users/Users";
import NewUser from "./components/modules/users/NewUser";
import User from "./components/modules/users/User";
import EditUser from "./components/modules/users/EditUser"
import RelasesState from "./context/relases/RelasesState";
import Relases from "./components/modules/relases/Relases";
import Relase from "./components/modules/relases/Relase"
import ShowDocument from "./components/modules/relases/ShowDocument"
import ContinueRelase from "./components/modules/relases/ContinueRelase"
import NewRelase from "./components/modules/relases/NewRelase";
import DocslabState from "./context/docslab/DocslabState";
import Docslab from "./components/modules/docslab/Docslab";
import Notifications from "./components/modules/notifications/Notifications";
import Workflow from "./components/modules/workflow/Workflow";
import Reportes from "./components/modules/reportes/Reportes";
import Config from "./components/modules/config/Config";
import Profile from "./components/modules/profile/Profile";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <LoginState>
      <AlertState>
        <DashboardState>
          <DocumentState>
            <UsersState>
              <RelasesState>
                <DocslabState>
                  <Router>
                    <Switch>
                      <Route path="/login" component={Login} />
                      <Route path="/reset-pwd" component={ResetPwd} />
                      <Route>
                        <div>
                          <Header />
                          <div className="wrap container">
                            <div className="menu-btn"></div>
                            <Sidebar />
                            <div className="container-item content">
                              <Switch>
                                <RoutePrivate exact path="/document/:id" component={Document} />
                                <RoutePrivate exact path="/documents/:id" component={Documents} />
                                <RoutePrivate exact path="/documents" component={Documents} />
                                <RoutePrivate exact path="/usuarios/show/:id" component={User} />
                                <RoutePrivate exact path="/usuarios/edit/:id" component={EditUser} />
                                <RoutePrivate exact path="/usuarios/create" component={NewUser} />
                                <RoutePrivate exact path="/usuarios/:id" component={Users} />
                                <RoutePrivate exact path="/usuarios" component={Users} />
                                <RoutePrivate exact path="/comunicados/nuevo" component={NewRelase} />
                                <RoutePrivate exact path="/comunicados/show-document/:id" component={ShowDocument} />
                                <RoutePrivate exact path="/comunicados/view-pdf/:id" component={ContinueRelase} />
                                <RoutePrivate exact path="/comunicados/send-email/:id" component={Relase} />
                                <RoutePrivate exact path="/comunicados/:id" component={Relases} />
                                <RoutePrivate exact path="/comunicados" component={Relases} />
                                <RoutePrivate exact path="/doclaboral/:id" component={Docslab} />
                                <RoutePrivate exact path="/doclaboral" component={Docslab} />
                                <RoutePrivate exact path="/reports" component={Reportes} />
                                <RoutePrivate exact path="/workflow" component={Workflow} />
                                <RoutePrivate exact path="/notifications" component={Notifications} />
                                <RoutePrivate exact path="/reports" component={Reportes} />
                                <RoutePrivate exact path="/config" component={Config}/>
                                <RoutePrivate exact path="/profile" component={Profile}/>
                                <RoutePrivate exact path="/index" component={Dashboard}/>
                                <RoutePrivate exact path="/" component={Dashboard}/>
                              </Switch>
                            </div>
                          </div>
                          <Footer />
                        </div>
                      </Route>
                    </Switch>
                  </Router>
                </DocslabState>
              </RelasesState>
            </UsersState>
          </DocumentState>
        </DashboardState>
      </AlertState>
    </LoginState>
  );
}

export default App;
