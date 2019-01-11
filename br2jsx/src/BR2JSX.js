import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    state = { 
        text: this.props.text
      };
      

    render() {       

        let breaks = ['<br/>','<br />'];
        let changedText = this.state.text;
        for (let v of breaks) {
            changedText = changedText.split(v).join('<br>');
        }
        changedText = changedText.split('<br>');

        let arr = [changedText[0]];
        for(let v=1; v<changedText.length; v++){
            arr.push(<br key = {v} />);
            arr.push(changedText[v]);
        }
               
        return <div className = 'text'>
            {arr} 
        </div>
                
    };

};

export default BR2JSX;