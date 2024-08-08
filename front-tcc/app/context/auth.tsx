"use client"
import React, {createContext} from "react";

const ThemeContext = createContext({})

export default function ThemeProvider({children}: any){
    return (
    <ThemeContext.Provider value="dark">
        {children}
    </ThemeContext.Provider>
    )
}