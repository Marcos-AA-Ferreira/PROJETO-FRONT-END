import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import CartPage from "../pages/CartPage";
import Comprar from "../pages/Comprar";
import CriarConta from "../pages/CriarConta";
import MyOrdersPage from "../pages/MyOrdersPage";
import MyProfilePage from "../pages/MyProfilePage";
import NaoImplementado from "../pages/NaoImplementado";

const AppRoutes = () => {
  const location = useLocation();
  const { logado } = useContext(Context);

  const headerRoutes = [ "/home", "/produtos", "/meuspedidos", "/view", "/meusdados", "/carrinho", "/comprar", "/finalizado" ];
  const showHeader = headerRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criarconta" element={<CriarConta />} />
        <Route path="/nao-implementado" element={<NaoImplementado />} />
        
        {logado ? (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/produtos" element={<ProductListingPage />} />
            <Route path="/meuspedidos" element={<MyOrdersPage />} />
            <Route path="/view" element={<ProductViewPage />} />
            <Route path="/meusdados" element={<MyProfilePage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/comprar" element={<Comprar />} />
          </>
        ) : (

          <Route path="*" element={<Navigate to="/" />} />
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
