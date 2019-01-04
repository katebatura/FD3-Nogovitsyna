import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './shopName.css';

class ShopName extends React.Component {

    static propTypes =  {
        shopName: PropTypes.string.isRequired,
    };

    render() {
        return (
            <h1 className = "shopName">{this.props.shopName}</h1>
        )
    };

};

export default ShopName;