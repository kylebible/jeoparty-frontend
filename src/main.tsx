import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";

const helloWorld = "hi";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
  <App />

    </Provider>
  </StrictMode>
);
