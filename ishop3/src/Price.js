import React from 'react';
import PropTypes from 'prop-types';

import './Price.css';

import ProductsBlock from './ProductsBlock';
import ShopName from './shopName';
import Card from './card';


class Price extends React.Component {

    static propTypes = {
        shopName: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                productCount: PropTypes.number.isRequired,
                productName: PropTypes.string.isRequired,
                productPrice: PropTypes.number.isRequired,
                productPhoto: PropTypes.string.isRequired,                
            })
        ),
        workMode: PropTypes.number.isRequired,// 0-начальное состояние, 1-режим просмотра, 2-режим редактирования, 3-создание нового продукта
    };

    state = { 
        productsArr: this.props.products,
        selectedProduct: null,
        workMode: this.props.workMode, 
        selectedProductName: null,
        selectedProductPrice: null,
        selectedProductPhoto: null,
        selectedProductCount: null,
      };

    selectProduct = (item, name, price, url, count) => {    
        if (this.state.workMode == 2 || this.state.workMode == 3) return;

        this.setState( {selectedProduct: item, selectedProductName: name, 
        selectedProductPrice: price, selectedProductPhoto: url, 
        selectedProductCount: count, workMode: item ? 1 : 0} )
    };

    deleteProduct = (item) => {
        this.setState( (currState,props) => { return {productsArr: currState.productsArr.filter(v => { return v.code != item})} })
        if (this.state.selectedProduct == item) {
            this.setState( {workMode: 0} )
        }
    };

    editProduct = (item, name, price, url, count) => {
        this.setState( {selectedProduct: item, selectedProductName: name, 
            selectedProductPrice: price, selectedProductPhoto: url, 
            selectedProductCount: count, workMode: 2} )
    };

    cancelChanges = () => {
        this.setState( {workMode: 1} )
    };

    saveChanges = (item, name, price, url, count) => {
        if(!item){
            item = this.state.productsArr.length + 1;
        }
        
        var newArr;

        if(this.state.productsArr.some( v => {return v.code == item})) {
            newArr = this.state.productsArr.map( v => {
                if(v.code == item) { return v = {
                    code: item,
                    productName: name,
                    productPrice: +price,
                    productPhoto: url,
                    productCount: +count}
                } else {return v}
            });            
        } else {
            newArr = [...this.state.productsArr, {
                code: item,
                productName: name,
                productPrice: +price,
                productPhoto: url,
                productCount: +count}]
        }

        this.setState( {productsArr: newArr} )

        this.setState( {selectedProduct: item, selectedProductName: name, 
            selectedProductPrice: +price, selectedProductPhoto: url, 
            selectedProductCount: +count, workMode: 1} );
        
    };

    createItem = () => {
        this.setState( {workMode: 3, selectedProduct: null,
            selectedProductName: null,  selectedProductPrice: null, selectedProductPhoto: null, 
            selectedProductCount: null} )
    }

    render() {
        let productsCode = this.state.productsArr.map( v => 
            <ProductsBlock key = {v.code} productName = {v.productName} 
            productCount = {v.productCount} productPrice = {v.productPrice} 
            productPhoto = {v.productPhoto}
            code = {v.code} selectedProduct = {this.state.selectedProduct} 
            cbSelectProduct = {this.selectProduct}
            cbEditProduct = {this.editProduct}
            cbDeleteProduct = {this.deleteProduct} />
        );

        return (
            <div className = 'price'>
                <ShopName shopName = {this.props.shopName} />
                <table className = 'products'>
                    <tbody>
                        <tr>
                            <th>Название товара</th>
                            <th>Цена</th>
                            <th>Внешний вид товара</th>
                            <th>Осталось на складе</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {productsCode}
                    </tbody>
                </table>
                <button onClick = {this.createItem} style = { {margin: "30px"} }>New Product</button>

                {
                    this.state.workMode ? 
                    <Card workMode = {this.state.workMode}
                    selectedProduct = {this.state.selectedProduct} 
                    selectedProductName = {this.state.selectedProductName}
                    selectedProductPrice = {this.state.selectedProductPrice}
                    selectedProductPhoto = {this.state.selectedProductPhoto}
                    selectedProductCount = {this.state.selectedProductCount}
                    cbCancelChanges = {this.cancelChanges}
                    cbSaveChanges = {this.saveChanges}>
                    </Card> : null
                }
            </div>
        )
        
        
    };

};

export default Price;