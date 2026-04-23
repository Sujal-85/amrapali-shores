import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import PageLoader from "./components/PageLoader.tsx";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <PageLoader>
    <App />
  </PageLoader>
);
