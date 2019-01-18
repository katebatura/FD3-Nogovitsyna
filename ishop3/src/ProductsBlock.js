import React from 'react';
import PropTypes from 'prop-types';

import './ProductsBlock.css';

class ProductsBlock extends React.Component {

    static propTypes =  {
        code: PropTypes.number.isRequired,
        productCount: PropTypes.number.isRequired,
        productPrice: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        productPhoto: PropTypes.string.isRequired,
        selectedProduct: PropTypes.number,
        cbSelectProduct: PropTypes.func.isRequired,
        cbEditProduct: PropTypes.func.isRequired,
        cbDeleteProduct: PropTypes.func.isRequired,
    };

    selectItem = () => {
        (this.props.code == this.props.selectedProduct) ?
        this.props.cbSelectProduct(null) :
        this.props.cbSelectProduct(this.props.code, this.props.productName,
            this.props.productPrice,this.props.productPhoto,this.props.productCount);
    };

    editItem = () => {
        this.props.cbEditProduct(this.props.code, this.props.productName,
            this.props.productPrice,this.props.productPhoto,this.props.productCount);
    };

    deleteItem = () => {
        this.props.cbDeleteProduct(this.props.code);
    };

    render() {
        return (
            <tr className = { (this.props.selectedProduct == this.props.code) ? 'selected' : null }>
                <td onClick = {this.selectItem}> {this.props.productName} </td>
                <td onClick = {this.selectItem}> {this.props.productPrice}  руб.</td>
                <td onClick = {this.selectItem}> {this.props.productPhoto} </td>
                <td onClick = {this.selectItem}> {this.props.productCount} </td>
                <td> 
                    <button onClick = {this.editItem}>Edit</button>
                </td>
                <td> 
                    <button onClick = {this.deleteItem}>Delete</button>
                </td>
            </tr>
        )        
        
    };

};

export default ProductsBlock;