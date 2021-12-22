import {inject, observer, Provider} from 'mobx-react';
import React from "react";

function PeopleList({appStore} = {}){
    const items = appStore.people.map((p) => <div key={Math.random()}>{p.name}</div>);

    return(
        <div>
            {items}
        </div>
    )
}

export default inject('appStore')(observer(PeopleList));