"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Price from './src/Price';

let name = 'Новогодние товары';

let productsArr = require('./products.json');

ReactDOM.render(
    < Price
    shopName = {name}
    products = {productsArr}
    />, 
    document.getElementById('container') 
);