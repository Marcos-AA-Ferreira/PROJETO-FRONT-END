import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import { ContaProvider } from "../contexts/ContaContext";

const Paths = () => {
    return (
        <BrowserRouter>
            <ContaProvider>
                <AppRoutes />
            </ContaProvider>
        </BrowserRouter>
    );
};

export default Paths;