var ProductsBlock = React.createClass({

    displayName: 'ProductsBlock', 

    propTypes: {
        productCount: React.PropTypes.number.isRequired,
        productPrice: React.PropTypes.number.isRequired,
        productName: React.PropTypes.string.isRequired,
        productPhoto: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.DOM.tr( null, 
            React.DOM.td( null, this.props.productName),
            React.DOM.td( null, this.props.productPrice + ' руб.'),
            React.DOM.td( null, 
                React.DOM.img( {src: this.props.productPhoto, className: 'productPhoto'} )),
            React.DOM.td( null, this.props.productCount),
        )
    },

});