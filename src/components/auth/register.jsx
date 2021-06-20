import { render } from "@testing-library/react";
import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    //Rendering the register page
    //Building up the reg.page structure.. divs inside div. 
    render() {
        return (
        <div className="base-container" ref={this.props.containerRef}> 
            <div className="header">Regisztráció</div>
            <div className="content">
            <div className="image">
                <img src={loginImg}></img>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Neptun kód</label>
                    <input type="text" name="username" placeholder="add meg a neptun kódod"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="add meg az e-mail címed"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Jelszó</label>
                    <input type="password" name="password" placeholder="add meg a jelszavad"></input>
                </div>
             </div>
            </div>
          <div className="footer">
              <button type="button" className="btn">
                    Regisztráció
              </button>
          </div>
        </div>
       );
    }
}