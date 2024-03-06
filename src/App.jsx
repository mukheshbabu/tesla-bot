// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* Add more routes for additional pages as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
