import { createContext, useState } from "react";

export const Context = createContext();

export const AuthProvider = ({context, children}) => {
    
    const [logado, setLogado] = useState(true);

    return (
        <>
            <Context.Provider value = {{logado, setLogado}}>
                {children}
            </Context.Provider>
        </>
    );
}
