"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import ChangeClients from '../components/clients';

let clientsArr=[ 
    {id:1, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:2, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:3, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:4, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ];

let reservedClients = clientsArr;

test('работа setActiveClients', () => {

    //проверяем, что ссылка на массив клиентов изменилась
    expect(ChangeClients.setActiveClients(clientsArr)).not.toBe(clientsArr);

    //проверяем, что ссылки на самих активных клиентов не изменились
    let client = ChangeClients.setActiveClients(clientsArr)[0];
    expect(client).toBe(clientsArr.find(v => v.id === client.id));
});

test('работа saveEditClient', () => {
    let client = clientsArr[0];

    //проверяем, что ссылка на массив клиентов изменилась
    expect(ChangeClients.saveEditClient(client,clientsArr,reservedClients).newClients).not.toBe(clientsArr);

    //проверяем, что ссылка на редактируемого клиента изменилась
    expect(ChangeClients.saveEditClient(client,clientsArr,reservedClients).newClients.find(v=>v.id == client.id))
        .not.toBe(clientsArr.find(v=>v.id == client.id));

    //проверяем, что ссылки на остальных клиентов не изменились
    expect(ChangeClients.saveEditClient(client,clientsArr,reservedClients).newClients.filter(v=>{return v.id != client.id})[0])
        .toBe(clientsArr.filter(v=>{return v.id != client.id})[0]);
});