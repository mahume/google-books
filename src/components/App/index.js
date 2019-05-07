import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from '../../pages/Search';
import Saved from '../../pages/Saved';
import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';
import './style.css';

function App() {
  return (
    <Router>
      <Nav />
      <Main>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Main>
      <Footer />
    </Router>
  )
}

export default App;