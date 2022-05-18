import React from 'react';

const ThemeContext = React.createContext({
    theme: "light",
    setTheme: () => {}
});

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState("light"); 

    return (
        <ThemeContext.Provider value={{theme, setTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }