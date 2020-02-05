import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavbarHome from './components/NavbarHome/NavbarHome';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Resources from './pages/Resources/Resources';
import FindOpportunities from './pages/FindOpportunities/FindOpportunities';
import SignUp from './pages/SignUp/SignUp';

import { useAuth0 } from "./react-auth0-spa";

import Footer from './components/Footer/Footer';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <Router>
      <div className="App">
        
        <NavbarHome />

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Blog" component={Blog}></Route>
        <Route exact path="/Resources" component={Resources}></Route>
        <Route exact path="/FindOpportunities" component={FindOpportunities}></Route>

        <Footer />


      </div>
    </Router>
  );
}

export default App;
