import React from 'react';
import { Banner } from '../banners/banner.jsx';
import { ThemeContext } from './themeContext.jsx';

export const WelcomePage = () => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    const textOne = "Welcome to my react demo web site.";
    const textTwo = "Click on a link in the menu to get started.";
    return (
      <>
        <Banner text1={textOne} text2={textTwo}/>
        <div>
          <label>{'Select Theme:  '}
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value={'light'}>light</option>
                <option value={'dark'}>dark</option>
              </select>
            </label>
        </div>
      </>
    )
  }