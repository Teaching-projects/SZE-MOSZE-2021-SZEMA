import React, { useState, useEffect, Component } from "react";
import Select from 'react-select'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SignedInStarterLinks from '../SignedInStarterLinks'
import 'firebase/firestore'
import '../../css/TestMakerDashboard.css'
import Button from '@material-ui/core/Button';
import TransferList from '../testmaker/TransferList';

export default class TestMakerDashboard extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
          options : [
                        { value: 'első', label: 'Első teszt' },
                        { value: 'második', label: 'Második teszt' },
                        { value: 'harmadik', label: 'Harmadik teszt' },
                        { value: 'uj', label: 'Új teszt' }
                    ]
      };
    }
    componentDidMount(){
       
    }
    render(){
        const handleStart = () =>{
            document.getElementById('main-welcome').style.display = "none"
            document.getElementById('main-start').style.display = "flex"
            console.log("none")
        }
        const handleChange = (event) => {
            this.state.age = event.target.value;
        };
        return(
        <>
            <header>  
                <AppBar position="relative" style={{background: '#2196f3'}}>
                    <Toolbar>
                    <SignedInStarterLinks />
                    </Toolbar>
                </AppBar>
            </header>
            <div id="main-welcome">
                <div id="welcome-content">
                    <div id="welcome-text">
                        Ezen a felületen létrehozhat új feladatsorokat a meglévő kérdésbázis segítségével, illetve módosíthatja a már létező teszteket.
                    </div>
                    <hr/>
                    <div id="welcome-rest">
                        <a  onClick={handleStart}>
                            <button variant="contained" color="primary">
                                Tovább
                            </button>
                        </a>
                        <a  href="/questionbase">
                            <button variant="contained" color="secondary">
                                Kérdésbázis megtekintése
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="main-start">
                <div id="main-start-wrapper">
                    <div class="choose-content">
                        <form>
                            <div class="center-fullwidth">
                                <div id="select-top">
                                    <Select width="50%" placeholder="Új teszt / Sablon kiválasztása..." options={this.state.options} />
                                </div>
                            </div>
                            <br/>
                            <div>
                            <label for="test-name">Teszt neve:</label>
                            <input type="text" id="test-name" name="test-name"></input><br/>
                            </div>
                            <input type="radio" id="edit" name="test-type" value="edit"/>
                            <label for="edit">Szerkesztés</label><br/>
                            <input type="radio" id="new" name="test-type" value="new"/>
                            <label for="new">Felhasználás sablonként</label><br/>
                            <input type="checkbox" id="zh" name="zh" value="zh"/>
                            <label for="zh"> Zárthelyi dolgozat</label><br/>
                        </form>
                    </div>
                    <hr/>
                    <div class="question-content">
                        <h1>Kérdések hozzáadása a feladatsorhoz</h1>
                        <form>
                            <label for="setup">Feladatsor:</label>
                            <select name="setup" id="setup-test">
                                <option value="elso">Első teszt</option>
                                <option value="masodik">Második teszt</option>
                                <option value="harmadik">Harmadik teszt</option>
                                <option value="negy">Negyedik teszt</option>
                            </select>
                            <label for="setup">Modul:</label>
                            <select name="setup" id="setup-test">
                                <option value="elso">1. Modul</option>
                                <option value="masodik">2. Modul</option>
                                <option value="harmadik">3. Modul</option>
                                <option value="negy">4. Modul</option>
                            </select>
                            <label for="test-name">Kulcsszó:</label>
                            <input type="text" id="test-name" name="test-name"></input>
                            <br/>
                        </form>
                        <TransferList type='question' quizzes={{}} state={{}} handleProps={{}}/>
                    </div>
                    <hr/>
                    <div class="member-content">
                        <h1>Felhasználók hozzárendelése a feladatsorhoz</h1>
                        <TransferList type='group' state={{}} users={{}} handleProps={{}}/>
                    </div>
                </div>

            </div>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    SZEMA
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Széchenyi István Egyetem
                </Typography>
            </footer>
            <script>
                
            </script> 
        </>
        )
    }
}