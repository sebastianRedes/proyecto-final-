import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
//import {compose} from "redux";
import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState ={
  wichlistPokemons: [],
  sectionActive: "Pokemons",
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(
  reducer,
   initialState,
    applyMiddleware(...middlewares));




ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
