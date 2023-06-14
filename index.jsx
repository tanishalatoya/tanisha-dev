import { createRoot } from "react-dom/client";
import App from "./src/App/App";

const container = document.getElementById("container");

const root = createRoot(container);

root.render(<App />);
