import React from 'react';
import { ThemeContext } from './themeContext.jsx';

export const SelectTheme = () => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    return (
        <div className="theme-select">
          <label>{'Select Theme:  '}
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value={'light'}>light</option>
                <option value={'dark'}>dark</option>
              </select>
            </label>
        </div>
    )
  }