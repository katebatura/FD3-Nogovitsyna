import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './card';
import {events} from './events';

import './MobileCompany.css';


class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    reservedClients: this.props.clients,
    workMode: 0,
    selectedClient: 0,
    new: false,
    watchClients: 0, //1-active Clients, 2- blocked Clients, 0 - all Clients
  };

  setName1 = () => {
    this.setState( {name:'МТС'} );
  };

  setName2 = () => {
    this.setState( {name:'Velcom'} );
  };

  setActiveClients = () => {
    let activeClients = this.state.reservedClients.filter(v => {return v.balance >= 0});
    this.setState( {clients: activeClients, watchClients: 1} );
  };

  setBlockedClients = () => {
    let blockedClients = this.state.reservedClients.filter(v => {return v.balance < 0});
    this.setState( {clients: blockedClients, watchClients: 2} );
  };

  setAllClients = () => {
    let allClients = [...this.state.reservedClients];
    this.setState( {clients: allClients, watchClients: 0} );
  };

  addNewClient = () => {
    if(this.state.workMode != 2){
      let newId = this.state.reservedClients[this.state.reservedClients.length - 1].id + 1;
      this.setState( {workMode: 2, selectedClient: newId, new: true} );
    } else {
      this.setState( {workMode: 0} );
    }    
  };

  componentDidMount = () => {
    events.addListener('saveClient',this.saveClient);
    events.addListener('cancelChanges',this.cancelChanges);
    events.addListener('editClient',this.editClient);
    events.addListener('deleteClient',this.deleteClient);
  };

  componentWillUnmount = () => {
    events.removeListener('saveClient',this.saveClient);
    events.removeListener('cancelChanges',this.cancelChanges);
    events.removeListener('deleteClient',this.deleteClient);
    events.removeListener('editClient',this.editClient);
  } ;
  
  editClient = (client) => {
    this.setState( {workMode: 1, selectedClient: client, new: false} );
  };

  deleteClient = (client) => {
    let newReservedClients = this.state.reservedClients.filter(c => {
      return c.id != client
    });
    let newClients = this.state.clients.filter(c => {
      return c.id != client
    });
    this.setState( {clients: newClients, reservedClients: newReservedClients,
       workMode: this.state.selectedClient == client ? 0 : this.state.workMode} );
  };

  saveClient = (client) => {
    this.setState( {workMode: null} );
    if(this.state.new) {
      let newReservedClients = [...this.state.reservedClients, client];
      this.setState( {reservedClients: newReservedClients, new: false} );

      switch(this.state.watchClients) {
        case 0:
          this.setState( {clients: newReservedClients} )
          break;
        case 1:
          if(client.balance >= 0){
            let newClients = [...this.state.clients, client]
            this.setState( {clients: newClients} )
          }
          break;
        case 2:
        if(client.balance < 0){
          let newClients = [...this.state.clients, client]
          this.setState( {clients: newClients} )
        }
      }
      return
    } 
    let changed = false;
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id == client.id ) {
        let newClient = {...c}; // копия хэша изменившегося клиента
        newClient.fam = client.fam;
        newClient.im = client.im;
        newClient.otch = client.otch;
        newClient.balance = client.balance;
        newClients[i] = newClient;
        changed = true;
      }
    } );
    switch(this.state.watchClients){
      case 1:
        newClients = newClients.filter(v => {return v.balance >= 0})
        break;
      case 2:
        newClients = newClients.filter(v => {return v.balance < 0})
        break;
    }

    if ( changed ){
      let newReservedClients = [...this.state.reservedClients]; // копия самого массива клиентов
      newReservedClients.forEach( (c,i) => {
        if ( c.id == client.id ) {
          let newClient = {...c}; // копия хэша изменившегося клиента
          newClient.fam = client.fam;
          newClient.im = client.im;
          newClient.otch = client.otch;
          newClient.balance = client.balance;
          newReservedClients[i] = newClient;
        }
      } );
      this.setState( {clients: newClients, reservedClients: newReservedClients,} );
    }
  };

  cancelChanges = () => {
    this.setState( {workMode: null, selectedClient: null} );
  };
    
  render() {

    console.log("MobileCompany render");
    var clientsCode = this.state.clients.map( client => {         
      return <MobileClient key = {client.id} info = {client} />;              
      }
    );

    return (
      <div>
        <input type = "button" value = "МТС" onClick = {this.setName1} />
        <input type = "button" value = "Velcom" onClick = {this.setName2} />
        <div className = 'MobileCompanyName'> Компания &laquo;{this.state.name}&raquo; </div>
        <hr />
        <input type = "button" value = "Все" onClick = {this.setAllClients} className = {!this.state.watchClients ? "watchClients" : null} />
        <input type = "button" value = "Активные" onClick = {this.setActiveClients} className = {this.state.watchClients == 1 ? "watchClients" : null} />
        <input type = "button" value = "Заблокированные" onClick = {this.setBlockedClients} className = {this.state.watchClients == 2 ? "watchClients" : null} />
        <hr />
        <table className = 'MobileCompany'>
          <tbody>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
            {clientsCode}
          </tbody>
        </table>
        <input type = "button" value = "Добавить клиента" onClick = {this.addNewClient} />
        {
          this.state.workMode == 1 ? 
          <Card
          key = {this.state.selectedClient}
          workMode = {this.state.workMode}
          selectedClient = {this.state.selectedClient}
          info = {this.state.selectedClient ? this.state.clients.filter( client => {
           if(client.id == this.state.selectedClient) {
            return client
           }
          })[0]: null } >
          </Card> : null
        }
        {
          this.state.workMode == 2 ? 
          <Card
          key = {this.state.selectedClient}
          workMode = {this.state.workMode}
          selectedClient = {this.state.selectedClient}
          info = { {id: this.state.selectedClient, key: this.state.selectedClient, fam: '',
          im: '', otch: '', balance: 0 } } >
          </Card> : null
        }
      </div>
    );

  }

}

export default MobileCompany;
