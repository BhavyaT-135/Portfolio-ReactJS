import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const Initial_State = { darkMode: true };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, Initial_State)

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
};