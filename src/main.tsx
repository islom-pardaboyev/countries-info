import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.tsx";
import { BrowserRouter } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
import ThemeProvider from "./context/ThemeContext.tsx";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
