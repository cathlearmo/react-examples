import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link } from "react-router-dom";
import { PersonTable } from './table/tableType.jsx';
import { SearchPage } from './search/searchPage.jsx';
import './App.css';

/*use React Router for client-side page navigation*/

function App() {
  return (
	<Router>
      <div className="App">
        <div className="page-with-sidebar">
          <nav>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/fetch" className="link">Fetch demo</Link>
                </li>
                <li>
                  <Link to="/table" className="link">Table demo</Link>
                </li>
              </ul>
          </nav>

          {/* <Routes> looks through its child <Route>s and
              renders the first one that matches the current URL. */}
          <div className={"main-content"}>
            <Routes>
              <Route path="/fetch" element={<SearchPage />}/>
              <Route path="/table" element={<PersonTable />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
