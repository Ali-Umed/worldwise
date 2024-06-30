import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
  // boya wam lekrd garna errore daa chunka gar na  childern zu dwrst byet xoy la kate nardn drwst bwa wa mnish return e akam ka handek shte bune nia gar use la zhurawa nabyet 
  // katawa damawet null return byet la jiate childern ka lawdew nardwma
}

export default ProtectedRoute;
