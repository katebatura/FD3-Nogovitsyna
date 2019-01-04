import React from 'react';
import PropTypes from 'prop-types';

import './Price.css';

import ProductsBlock from './ProductsBlock';
import ShopName from './shopName';

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
        )
    };

    state = { 
        productsArr: this.props.products,
        selectedProduct: null,
      };

    SelectProduct = (item) => {
        this.setState( {selectedProduct: item} )
    };

    DeleteProduct = (item) => {
        this.setState( (currState,props) => { return {productsArr: currState.productsArr.filter(v => { return v.code != item})} })
    };

    render() {
        let productsCode = this.state.productsArr.map( v => 
            <ProductsBlock key = {v.code} productName = {v.productName} 
            productCount = {v.productCount} productPrice = {v.productPrice} 
            productPhoto = {v.productPhotov.productPhoto}
            code = {v.code} selectedProduct = {this.state.selectedProduct} 
            cbSelectProduct = {this.SelectProduct}
            cbDeleteProduct = {this.DeleteProduct} />
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
                            <th>Delete</th>
                        </tr>
                        {productsCode}
                    </tbody>
                </table>
            </div>
        )
        
        
    };

};

export default Price;