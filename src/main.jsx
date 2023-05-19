import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from './redux'
import App from "./app/App";
import "./index.css";
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

let persistore = persistStore(reduxStore)

ReactDOM.createRoot(document.getElementById("root")).render(
   <>
      <Provider store={reduxStore}>
         <BrowserRouter>
         <PersistGate persistor={persistore}> 
            <App />
         </PersistGate>
         </BrowserRouter>
      </Provider>
   </>
);
