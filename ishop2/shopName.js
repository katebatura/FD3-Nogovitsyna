var shopName = React.createClass({

    displayName: 'shopName',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.DOM.h1( {className: 'shopName'}, this.props.shopName )
    }, 

})