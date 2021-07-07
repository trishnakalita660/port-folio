import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import  Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SingleProjects from "./components/SingleProjects";


function App() {
  return (
    <div>   
      <Navbar/>    
      <div>
      <Switch>
       <Route path="/portfolio" component={Home} exact={true} />
         
        <Route component={About} path="/about" />
        <Route component={ Projects} path="/projects" />
         
        <Redirect to="/portfolio"/>
      </Switch>
      </div>
      </div>
  );
}

export default App;
