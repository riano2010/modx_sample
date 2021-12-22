import {inject, observer, Provider} from 'mobx-react';
import React, { useState } from "react";

function PeopleAdd({appStore} = {}){
    const [name, setName ] = useState('');

    return(
        <div>
            Имя: <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) => appStore.add(name)}> Добавить </button>
        </div>
    )
}

export default inject('appStore')(PeopleAdd);