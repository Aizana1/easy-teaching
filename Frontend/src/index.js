import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import {ContextProvider} from './socket/SocketContext'
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import createSagaMiddleware from "redux-saga";
import { tasksWatcher } from './redux/sagas/tasksWatcher';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)));
sagaMiddleware.run(tasksWatcher);


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <ContextProvider>
        <App />
        </ContextProvider>
      </Provider>
      
    </BrowserRouter>,
  document.getElementById('root')
);
