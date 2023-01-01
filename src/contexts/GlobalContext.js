import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
    const [volume, setVolume] = useState(0);
    return (
        <GlobalContext.Provider value={{
            volume, setVolume
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;