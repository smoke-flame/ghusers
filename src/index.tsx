import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import Navigation from "./Navigation";
import {store} from './redux/store'



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <h1 className='main-title'>Github Searcher</h1>
            <Navigation/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


