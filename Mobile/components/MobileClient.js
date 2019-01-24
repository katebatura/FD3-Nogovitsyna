import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {events} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id=" + this.props.info.id + " componentWillReceiveProps");
    this.setState( {info: newProps.info} );
  };

  editClient = () => {
    events.emit('editClient', this.state.info.id);
  };

  deleteClient = ()=> {
    events.emit('deleteClient', this.state.info.id);
  };

  render() {

    console.log("MobileClient id=" + this.state.info.id + " render");
    
    return (
      <tr>
        <td>{this.state.info.fam}</td>
        <td>{this.state.info.im}</td>
        <td>{this.state.info.otch}</td>
        <td>{this.state.info.balance}</td>
        {
          (this.state.info.balance >= 0)?
          <td className = "active">Active</td>:
          <td className = "blocked">Blocked</td>
        }
        <td>
          <input type = "button" value = "Редактировать" onClick = {this.editClient} />          
        </td>
        <td>
          <input type = "button" value = "Удалить" onClick = {this.deleteClient} />          
        </td>
      </tr>
    );

  }

}

export default MobileClient;
