import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {


    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string.isRequired),
    };

    render() {

        let arr = [<div style = { {border:"solid 8px " + this.props.colors[0], padding: "5px", display: "inline-block"} }
              key = {0}>{this.props.children}</div>];
        let text = arr[0];
        for (let i = 1; i < this.props.colors.length; i++){            
            text = <div style = { {border:"solid 8px " + this.props.colors[i] , padding: "5px", display: "inline-block"} } 
                key = {i} >{text}</div>;
            arr[0] = text;
        }

        
        return (
            <div>           
                {arr}
            </div>
          );
    };

};

export default RainbowFrame;