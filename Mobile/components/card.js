import React from 'react';
import PropTypes from 'prop-types';

import './card.css';
import {events} from './events';

class Card extends React.PureComponent {

    static propTypes =  {
        workMode: PropTypes.number.isRequired,//1 - edit, 2 - new
        selectedClient: PropTypes.number,
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
          }),
    };

    state = {
        workMode: this.props.workMode,
        info: this.props.info, 
        errorName: false,
    };

    newFamRef = null;

    setNewFamRef = (ref) => {
        this.newFamRef = ref
    }

    newImRef = null;

    setNewImRef = (ref) => {
        this.newImRef = ref
    }

    newOtchRef = null;

    setNewOtchRef = (ref) => {
        this.newOtchRef = ref
    }

    newBalanceRef = null;

    setNewBalanceRef = (ref) => {
        this.newBalanceRef = ref
    }

    saveChanges = () => {
        let client = {id: this.state.info.id,
             fam: this.newFamRef.value, im: this.newImRef.value,
             otch: this.newOtchRef.value, balance: +this.newBalanceRef.value, key: this.state.info.id};
        events.emit('saveClient', client);
    };

    cancelChanges = () => {
        events.emit('cancelChanges', null);
    };

    componentWillReceiveProps(newProps) {//при нажатии редактирования у др client изменяем стейт на новые пропсы
        this.setState( {workMode: newProps.workMode, 
            selectedClient: newProps.selectedClient, info: newProps.info} )
    };

    render() {
        console.log("MobileClient id=" + this.state.info.id + " render");
            return (
                <div> 
                    { this.state.workMode == 1 ? 
                    <h3> Edit Client </h3> :
                    <h3> New Client </h3>
                    }                    
                    <label>Фамилия: <input  defaultValue = {this.state.info.fam} ref = {this.setNewFamRef} /> </label>
                    <br/>
                    <label>Имя: <input  defaultValue = {this.state.info.im} ref = {this.setNewImRef} /> </label>
                    <br/>
                    <label>Отчество: <input  defaultValue = {this.state.info.otch} ref = {this.setNewOtchRef} /> </label>
                    <br/>
                    <label>Баланс: <input  defaultValue = {this.state.info.balance} ref = {this.setNewBalanceRef} /> </label>
                    <br/>
                    <button onClick = {this.saveChanges} >Save</button>
                    <button onClick = {this.cancelChanges}>Cancel</button>
                </div>                
            )
        
    };

};

export default Card;