import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link } from "react-router-dom";
import { PersonTable } from './table/tableType.jsx';
import { SearchPage } from './search/searchPage.jsx';
import { Banner } from './banners/banner.jsx';
import './App.scss';

const WelcomePage = () => {
  const textOne = "Welcome to my react demo web site.";
  const textTwo = "Click on a link in the side nav to get started.";
  return <Banner text1={textOne} text2={textTwo}/>
}

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
              <Route path="/react-examples" element={<WelcomePage />}/>
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
