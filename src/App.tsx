import SuspenseLoader from "@components/SuspenseLoader";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
