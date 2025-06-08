import { createContext, useContext, useState } from "react";

const ContaContext = createContext();

export const useConta = () => useContext(ContaContext);

export const ContaProvider = ({ children }) => {
    const [dadosConta, setDadosConta] = useState(null);

    return (
        <>
            <ContaContext.Provider value={{ dadosConta, setDadosConta }}>
                {children}
            </ContaContext.Provider>
        </>
        
    );
};