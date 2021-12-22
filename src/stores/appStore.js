import { makeAutoObservable } from "mobx"

export class Person{
    name = ''
}

export class AppStore {
    people = []

    constructor(){                
        makeAutoObservable(this)
    }

    add(name){
        let person = new Person();
        person.name = name;

        this.people.push(person);
    }
}