import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link } from "react-router-dom";
import { PersonTable } from './table/tableType.jsx';
import { SearchPage } from './search/searchPage.jsx';
import { DesignPage } from './design/designPage.jsx';
import { Banner } from './banners/banner.jsx';
import { useMediaQuery } from 'react-responsive';
import './App.scss';

const WelcomePage = () => {
  const textOne = "Welcome to my react demo web site.";
  const textTwo = "Click on a link in the side nav to get started.";
  return <Banner text1={textOne} text2={textTwo}/>
}

/*use React Router for client-side page navigation*/

function App() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const contentClass = isDesktop ? 'page-with-sidebar desktop' : 'page-with-sidebar mobile';

  return (
	<Router>
      <div className="App">
        <div className={contentClass}>
          <nav>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/fetch" className="link">Fetch demo</Link>
                </li>
                <li>
                  <Link to="/table" className="link">Table demo</Link>
                </li>
                <li>
                  <Link to="/design" className="link">Design demo</Link>
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
              <Route path="/design" element={<DesignPage />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
