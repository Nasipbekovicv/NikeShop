import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from './redux'
import App from "./app/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <>
      <Provider store={reduxStore}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </>
);
