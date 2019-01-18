import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

class Card extends React.Component {

    static propTypes =  {
        workMode: PropTypes.number.isRequired,
        selectedProduct: PropTypes.number,
        selectedProductName: PropTypes.string,
        selectedProductPrice: PropTypes.number,
        selectedProductPhoto: PropTypes.string,
        selectedProductCount: PropTypes.number,
        cbCancelChanges: PropTypes.func.isRequired,
        cbSaveChanges: PropTypes.func.isRequired,
    };

    state = {
        name: this.props.selectedProductName || '',
        price: this.props.selectedProductPrice || '',
        url: this.props.selectedProductPhoto || '',
        count: this.props.selectedProductCount || '',
        errorName: false,
        errorPrice: false,
        errorUrl: false,
        errorQuantity: false,
        
    };

    changeName = (e)=> {
        this.setState( {name: e.target.value, errorName: false} );
    };
    changePrice = (e)=> {
        this.setState( {price: e.target.value, errorPrice: false} )
    };
    changeUrl = (e)=> {
        this.setState( {url: e.target.value, errorUrl: false} )
    };
    changeQuantity = (e)=> {
        this.setState( {count: e.target.value, errorQuantity: false} )
    };

    saveChanges = () => {
        this.props.cbSaveChanges(this.props.selectedProduct, this.state.name, 
            this.state.price, this.state.url, this.state.count);
    };

    cancelChanges = () => {
        this.props.cbCancelChanges();
    };

    checkName = () => {
        if(!this.state.name || typeof this.state.name != 'string') {
            this.setState( {errorName: true} )
        }
    };
    checkPrice = () => {
        let price = parseFloat(this.state.price);
        if(!this.state.price || isNaN(price) || price <= 0) {
            this.setState( {errorPrice: true} )
        }
    };
    checkUrl = () => {
        var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(this.state.url);
        if( !valid ) {
            this.setState( {errorUrl: true} )
        }
    };
    checkQuantity = () => {
        let count  = parseFloat(this.state.count);
        if(!this.state.count || isNaN(count) || parseInt(this.state.count) != count || count < 0) {
            this.setState( {errorQuantity: true} )
        }
    };

    componentWillReceiveProps(newProps) {//при нажатии редактирования у др продукта изменяем стейт на новые пропсы
        this.setState( {name: newProps.selectedProductName || '', price: newProps.selectedProductPrice || '',
        url: newProps.selectedProductPhoto || '', count: newProps.selectedProductCount || '', errorName: false,
        errorPrice: false, errorUrl: false, errorQuantity: false} )
    };

    render() {
        if(this.props.workMode == 1) {//в режиме просмотра
            return (
                <div>
                    <h3> {this.props.selectedProductName} </h3>
                    <p> <b>Price</b> {this.props.selectedProductPrice} </p>
                    <p> { this.props.selectedProductCount > 0 ? "В наличии" : "Нет в наличии"} </p>
                </div>                
            )
        }
        else {
            return (//в режиме редактирования
                <div>
                    <h3> Edit existing product </h3>
                    <label>Name: <input  value = {this.state.name} onChange = {this.changeName} onBlur = {this.checkName} /> </label>
                    <span className = {this.state.errorName? "visible" : "invisible"}>Please, fill the field. Value must be a string</span> <br/>
                    <label>Price: <input  value = {this.state.price} onChange = {this.changePrice} onBlur = {this.checkPrice} /> </label>
                    <span className = {this.state.errorPrice? "visible" : "invisible"}>Please, fill the field. Value must be a rational number greater than 0</span> <br/>
                    <label>Url: <input  value = {this.state.url} onChange = {this.changeUrl} onBlur = {this.checkUrl} /> </label>
                    <span className = {this.state.errorUrl? "visible" : "invisible"}>Please, fill the field. Value must be a valid url</span> <br/>
                    <label>Quantity: <input  value = {this.state.count} onChange = {this.changeQuantity} onBlur = {this.checkQuantity} /> </label>
                    <span className = {this.state.errorQuantity? "visible" : "invisible"}>Please, fill the field. Value must be a positive integer</span> <br/>
                    <button onClick = {this.saveChanges} disabled = {(this.state.errorName || this.state.errorPrice ||
                        this.state.errorUrl || this.state.errorQuantity || 
                        !this.state.name || !this.state.price || !this.state.url || !this.state.count)? true:false}>Save</button>
                    <button onClick = {this.cancelChanges}>Cancel</button>
                </div>                
            )
        }
        
    };

};

export default Card;