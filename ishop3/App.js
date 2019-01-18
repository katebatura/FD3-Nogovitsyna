"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Price from './src/Price.js';

let name = 'Новогодние товары';

let productsArr = require('./products.json');

ReactDOM.render(
    <Price shopName = {name}
    products = {productsArr}
    workMode = {0}
    />, 
    document.getElementById('container') 
);