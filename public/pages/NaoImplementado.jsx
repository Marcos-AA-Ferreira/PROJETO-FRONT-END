import { useNavigate } from "react-router-dom";

//Essa página foi feita completamente por ia

const NaoImplementado = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h2>Função não implementada</h2>
      <p>Esta funcionalidade ainda não está disponível.</p>
      <button 
        onClick={() => navigate(-1)} 
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#6200ee",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Voltar
      </button>
    </div>
  );
};

export default NaoImplementado;