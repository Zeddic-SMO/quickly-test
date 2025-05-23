import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SuspenseLoader from "@components/SuspenseLoader";
import { themeConfig } from "@utils/theme";
import AppRoutes from "./routes";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Suspense fallback={<SuspenseLoader />}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
