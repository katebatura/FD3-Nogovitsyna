var Price = React.createClass({

    displayName: 'price',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                productCount: React.PropTypes.number.isRequired,
                productName: React.PropTypes.string.isRequired,
                productPrice: React.PropTypes.number.isRequired,
                productPhoto: React.PropTypes.string.isRequired,
            })
        )
    },

    getInitialState: function() {
        return { 
          productsArr: this.props.products,
          selectedProduct: null,
        };
      },

    SelectProduct: function(item) {
        this.setState( {selectedProduct: item} )
    },

    DeleteProduct: function(item) {
        this.setState( (currState,props) => { return {productsArr: currState.productsArr.filter(v => { return v.code != item})} })
    },

    render: function() {
        var productsCode = this.state.productsArr.map( v => 
            React.createElement(ProductsBlock, {key: v.code,  productName: v.productName, productCount: v.productCount,
                productPrice: v.productPrice, productPhoto: v.productPhoto, code: v.code,
                selectedProduct: this.state.selectedProduct, cbSelectProduct: this.SelectProduct,
                cbDeleteProduct: this.DeleteProduct} ) 
        );

        return React.DOM.div( {className: 'price'},
            React.createElement(shopName, {shopName: this.props.shopName} ),
            React.DOM.table( {className: 'products'}, 
                React.DOM.tbody( null,
                    React.DOM.tr( null, 
                        React.DOM.th( null, 'Название товара'),
                        React.DOM.th( null, 'Цена'),
                        React.DOM.th( null, 'Внешний вид товара'),
                        React.DOM.th( null, 'Осталось на складе'),
                        React.DOM.th( null, 'Delete'),),
                    productsCode    
                ),
             ),
        );

    },

});