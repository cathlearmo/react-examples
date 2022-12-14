import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link } from "react-router-dom";
import { PersonTable } from './table/tableType.jsx';
import { SearchPage } from './search/searchPage.jsx';
//import { DesignPage } from './design/designPage.jsx';
import { WelcomePage } from "./welcome/welcomePage.jsx";
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from './context/themeContext.jsx';
import { SelectTheme } from './context/selectTheme.jsx';
import { GridDemo } from './grid/gridDemo.jsx';
import { TabDemo } from './tabsPage/tabDemo.jsx';
import { ModalContainer } from './modal/modalContainer';
import './App.scss';

/*use React Router for client-side page navigation*/

function App() {
  const { theme } = React.useContext(ThemeContext);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  let contentClass = isDesktop ? 'page-with-sidebar desktop ' : 'page-with-sidebar mobile ';
  contentClass = contentClass + theme;

  return (
	<Router>
      <div className="App">
        <div className={contentClass}>
          <nav>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/" className="link">Home</Link>
                </li>
                <li>
                  <Link to="/fetch" className="link">Fetch demo</Link>
                </li>
                <li>
                  <Link to="/table" className="link">Table demo</Link>
                </li>
                <li>
                  <Link to="/grid" className="link">Grid demo</Link>
                </li>
                <li>
                  <Link to="/tabs" className="link">Tabs demo</Link>
                </li>
                {/*<li>
                  <Link to="/design" className="link">Design demo</Link>
                </li>*/}
              </ul>
              <SelectTheme/>
          </nav>

          {/* <Routes> looks through its child <Route>s and
              renders the first one that matches the current URL. */}
          <div className={'main-content ' + theme}>
            <Routes>
              <Route path="/" element={<WelcomePage />}/>
              <Route path="/react-examples" element={<WelcomePage />}/>
              <Route path="/fetch" element={<SearchPage />}/>
              <Route path="/table" element={<PersonTable />}/>
              <Route path="/grid" element={<GridDemo />}/>
              <Route path="/tabs" element={<TabDemo />}/>
              {/*<Route path="/design" element={<DesignPage />}*/}
            </Routes>
            <ModalContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
