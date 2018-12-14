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

    render: function() {
        var productsCode = this.props.products.map( v => 
            React.createElement(ProductsBlock, {key: v.code,  productName: v.productName, productCount: v.productCount,
                productPrice: v.productPrice, productPhoto: v.productPhoto} ) 
        );

        return React.DOM.div( {className: 'price'},
            React.createElement(shopName, {shopName: this.props.shopName} ),
            React.DOM.table( {className: 'products'}, 
                React.DOM.tbody( null,
                    React.DOM.tr( null, 
                        React.DOM.th( null, 'Название товара'),
                        React.DOM.th( null, 'Цена'),
                        React.DOM.th( null, 'Внешний вид товара'),
                        React.DOM.th( null, 'Осталось на складе'),),
                    productsCode    
                ),
             ),
        );

    },

});