import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages: the app is served under /<repo>/
// Ensure the in-app router sees "/" on first load.
const repoBase = `/${import.meta.env.BASE_URL.replaceAll("/", "")}/`; 
// import.meta.env.BASE_URL is usually "/<repo>/" on Pages, "/" in dev

if (repoBase !== "//" && location.pathname === repoBase) {
  history.replaceState(null, "", "./");
}

createRoot(document.getElementById("root")!).render(<App />);
