import {inject, observer, Provider} from 'mobx-react';
import React, { Component } from "react";
import {AppStore, Person } from "../stores/appStore";
import PeopleList from './PeopleList';
import PeopleAdd from './PeopleAdd';

import '../styles/App.css';


function App(){
    let appStore = new AppStore();    

    return(
        <div>
            <Provider appStore={appStore}>
                <PeopleAdd />
                <PeopleList />                                
            </Provider>        
        </div>
    )   
}

export default App;