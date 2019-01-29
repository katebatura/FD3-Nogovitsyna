"use strict";

class ChangeClients {

    constructor() {

    };

    static setActiveClients = (reservedClients) => {
        let activeClients = reservedClients.filter(v => {return v.balance >= 0});
        return activeClients;
    };

    static setBlockedClients = (reservedClients) => {
        let blockedClients = reservedClients.filter(v => {return v.balance < 0});
        return blockedClients;
    };

    static setAllClients = (reservedClients) => {
        let allClients = [...reservedClients];
        return allClients;
    };

    static addNewClient = (reservedClients) => {
        let newId = reservedClients[reservedClients.length - 1].id + 1;
        return newId;
    };

    
    static deleteClient = (client, clients, reservedClients) => {
        let newReservedClients = reservedClients.filter(c => {
            return c.id != client
            });
        let newClients = clients.filter(c => {
            return c.id != client
            });
        return { newClients, newReservedClients };
    };

    static saveNewClient = (client, clients, reservedClients) => {
        
        let newReservedClients = [...reservedClients, client];

        let newClients = [...clients, client];
        
        return { newClients, newReservedClients };
    };

    static saveEditClient = (client, clients, reservedClients) => {
    
        let changed = false;

        let newClients = [...clients]; // копия самого массива клиентов
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

        let newActiveClients = newClients.filter(v => {return v.balance >= 0});

        let newBlockedClients = newClients.filter(v => {return v.balance < 0});

        let newReservedClients = [...reservedClients]; // копия самого массива клиентов
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
            
        return { newClients, newActiveClients, newBlockedClients, newReservedClients, changed }
      };

  };
export default ChangeClients;