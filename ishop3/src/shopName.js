import React from 'react';
import PropTypes from 'prop-types';

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