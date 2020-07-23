import React, {useState} from 'react';
import FirstWindow from './components/structure/firstWindow/FirstWindow'
import SecondWindow from './components/structure/secondWindow/SecondWindow'
import ThirdWindow from './components/structure/thirdWindow/ThirdWindow'
import FourthWindow from './components/structure/fourthWindow/FourthWindow'
import FifthWindow from "./components/structure/fifthWindow/FifthWindow"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HelpWindow from './components/helpWindow/HelpWindow';
import NotFound from "./components/structure/notFound404/NotFound404";
import Database from "./components/database/Database"

//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css'



class App extends React.Component {

  
  render(){
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstWindow} />
          <Route path="/presentacion" component={SecondWindow} />
          <Route path="/mapa" component={ThirdWindow} />
          <Route path="/alerta" component={FourthWindow} />
          <Route path="/ayuda" component={HelpWindow} />
          <Route path="/alerta-detalle" component={FifthWindow} />
          <Route path="/database" component={Database} />
          <Route component={NotFound}/>
        </Switch>
      </Router> 
    </div>
  );
  }
}

export default App;
