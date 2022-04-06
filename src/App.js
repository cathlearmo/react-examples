import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link } from "react-router-dom";
import { PersonTable } from './table/tableType.jsx';
import './App.css';

function App() {
  return (
	<Router>
      <div className="App">
        <div className="page-with-sidebar">
          <nav>
            <div className="sidebar">
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/">Sortable Table</Link>
                </li>
                <li>
                  <Link to="/custom">Fetch demo</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div>
            <Routes>
              {/*<Route path="/custom">
                <ToDo />
              </Route>*/}
              <Route path="/" element={<PersonTable />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
