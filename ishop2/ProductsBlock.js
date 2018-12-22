var ProductsBlock = React.createClass({

    displayName: 'ProductsBlock', 

    propTypes: {
        code: React.PropTypes.number.isRequired,
        productCount: React.PropTypes.number.isRequired,
        productPrice: React.PropTypes.number.isRequired,
        productName: React.PropTypes.string.isRequired,
        productPhoto: React.PropTypes.string.isRequired,
        selectedProduct: React.PropTypes.number,
        cbSelectProduct: React.PropTypes.func.isRequired,
        cbDeleteProduct: React.PropTypes.func.isRequired,
    },

    selectItem: function() {
        (this.props.code == this.props.selectedProduct) ?
        this.props.cbSelectProduct(null) :
        this.props.cbSelectProduct(this.props.code);
    },

    deleteItem: function() {
        this.props.cbDeleteProduct(this.props.code);
    },

    render: function() {
        return React.DOM.tr( { 
            className: (this.props.selectedProduct == this.props.code) ? 'selected' : null }, 
            React.DOM.td( {onClick: this.selectItem}, this.props.productName),
            React.DOM.td( {onClick: this.selectItem}, this.props.productPrice + ' руб.'),
            React.DOM.td( {onClick: this.selectItem}, 
                React.DOM.img( {src: this.props.productPhoto, className: 'productPhoto'} )),
            React.DOM.td( {onClick: this.selectItem}, this.props.productCount),
            React.DOM.td( null, 
                React.DOM.button( {onClick: this.deleteItem}, 'Delete')
                ),
        )
    },

});