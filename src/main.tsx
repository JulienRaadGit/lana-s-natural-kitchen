import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages (repo subpath) fix: avoid treating "/repo-name/" as an in-app route
const base = import.meta.env.BASE_URL;
if (base !== "/" && location.pathname === base) {
  history.replaceState(null, "", base + "#/");
}

createRoot(document.getElementById("root")!).render(<App />);
