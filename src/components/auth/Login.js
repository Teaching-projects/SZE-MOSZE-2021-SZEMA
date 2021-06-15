import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import '../../css/App.css';
import "./style.scss"; 
import loginImg from "../img/login.svg";
import backgroundIMG from '../../SZEMA_WEB_background_3.svg'
import firebase from "firebase/app";
import "firebase/auth";
const Login = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
      ;
      try {
        await firebase.auth()
        .signInWithPopup(googleAuthProvider)
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
      <div className="App" style={{backgroundImage: `url(${backgroundIMG})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundColor:'white'}}>
      <div className="login">
        <div className="container">
          <div className="base-container" >
            <div className="header">Széchenyi István Egyetem -<strong> SZEMA</strong><p></p></div>
            <div className="headerLogin">Bejelentkezés</div><p></p>
              <div className="content">
                <div className="image">
                  <img src={loginImg}></img>
                </div>
                <div className="form"></div>
              </div>
              <div className="footer">
              <div className="container">
              <div className="center">
                <button type="button" onClick={handleLogin} className="btnL">

                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                  <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
              </svg>

                  <span>Bejelentkezés Google fiókkal</span>
                </button>
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default withRouter(Login);
