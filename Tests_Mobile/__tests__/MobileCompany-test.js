"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import MobileClient from '../components/MobileClient';

test('работа кнопок "Добавить", "Редактировать" и "Удалить" клиента', () => {
    
    //исходные данные
    let companyName='Velcom';
    let clientsArr=[ 
    {id:1, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:2, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:3, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:4, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
    ];

    // создаём тестовую версию компонента MobileCompany
    const component  = renderer.create(
        <MobileCompany
        name={companyName}
        clients={clientsArr}
       />
    );
    // получаем снэпшот MobileCompany (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента кнопку addClientButton
    const addClientButton = component.root.find( el => el.props.id == 'addClientButton'  ); 
    addClientButton.props.onClick();

    // получаем уже изменённый снэпшот MobileCompany
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // "нажмём" кнопку ещё раз
    addClientButton.props.onClick();
    
    // и получаем окончательный снэпшот MobileCompany
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();



    //создаём тестовую версию компонента MobileClient
    const client = renderer.create(
        <MobileClient
        info = {clientsArr[0]}/>
    )

    // найдём в вёрстке компонента кнопку editClientButton
    const editClientButton = client.root.find( el => el.props.id == 'editClientButton' ); 
    editClientButton.props.onClick();

    // получаем уже изменённый снэпшот  MobileCompany
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    
    // найдём в вёрстке компонента кнопку deleteClientButton
    const deleteClientButton = client.root.find( el => el.props.id == 'deleteClientButton' ); 
    deleteClientButton.props.onClick();

    // получаем уже изменённый снэпшот  MobileCompany
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});