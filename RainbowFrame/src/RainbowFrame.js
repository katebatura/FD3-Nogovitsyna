import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {


    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string.isRequired),
    };

    render() {

        let text = <div style = { {border:"solid 8px " + this.props.colors[0], padding: "5px", display: "inline-block"} }
              key = {0}>{this.props.children}</div>;
        for (let i = 1; i < this.props.colors.length; i++){            
            text = <div style = { {border:"solid 8px " + this.props.colors[i] , padding: "5px", display: "inline-block"} } 
                key = {i} >{text}</div>;
        }

        
        return (
            <div>           
                {text}
            </div>
          );
    };

};

export default RainbowFrame;