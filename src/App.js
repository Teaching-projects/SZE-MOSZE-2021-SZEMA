import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/auth/Login"
import { AuthProvider } from "./components/auth/Auth"
import PrivateRoute from "./components/auth/PrivateRoute"
import QuestionBaseDashboard from './components/dashboards/QuestionBaseDashboard'
import CreateTestDashboard from './components/dashboards/CreateTestDashboard'
import NewsDashboard from './components/dashboards/NewsDashboard'
import MainDashboard from "./components/dashboards/MainDashboard"
import TestMakerDashboard from './components/dashboards/TestMakerDashboard'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={MainDashboard}/>
          <PrivateRoute path="/news" component={NewsDashboard} />
          <PrivateRoute path="/questionbase" component={QuestionBaseDashboard} />
          <PrivateRoute path="/createtest" component={TestMakerDashboard} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
