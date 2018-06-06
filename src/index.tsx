import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {PersonAction} from "./actions";
import App from './App';
import './index.css';
import {reducer} from "./reducers";
import registerServiceWorker from './registerServiceWorker';
import {IStore} from "./types";

const store = createStore<IStore, PersonAction, any, any>(reducer as any, {})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
