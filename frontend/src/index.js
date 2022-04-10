import react from "react"
import ReactDom from "react-dom"
import App from "./App.js";
import { Provider } from "react-redux"

import { createStore, applyMiddleware, compose } from "redux"
// import Form from "./components/Form/Form.js";
import thunk from "redux-thunk"
import reducers from "./reducer"
import "./index.css"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")


);
