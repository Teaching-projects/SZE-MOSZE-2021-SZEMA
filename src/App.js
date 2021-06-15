import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/auth/Login"
import { AuthProvider } from "./components/auth/Auth"
import PrivateRoute from "./components/auth/PrivateRoute"


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
}

export default App;
