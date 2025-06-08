import { AuthProvider } from "./contexts/AuthContext";
import Paths from "./routers/Paths"

const App = () => {

  return ( 
    <>
      <AuthProvider>
        <Paths />
      </AuthProvider>
    </>
   );
}
 
export default App;