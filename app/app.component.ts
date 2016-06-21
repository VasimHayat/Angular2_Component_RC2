import { Component, OnInit } from '@angular/core';
import {User} from "./user.model"; 

const USERS: User[] = [
  { id: "EMP_0001", name: 'Jack',age:19,address:"New York" },
  { id: "EMP_0002", name: 'Andrew',age:20,address:"South Wells" },
  { id: "EMP_0003", name: 'Riyan' ,age:22,address:"London"},
  { id: "EMP_0004", name: 'Niyak' ,age:21,address:"South City"},
  { id: "EMP_0005", name: 'Flature' ,age:27,address:"New York"},
  { id: "EMP_0006", name: 'Robin' ,age:25,address:"New York"},
  { id: "EMP_0007", name: 'Arnold' ,age:19,address:"New York"},
  { id: "EMP_0008", name: 'Cristena' ,age:30,address:"New York"},
  { id: "EMP_0009", name: 'Somantha' ,age:22,address:"New York"},
  { id: "EMP_0010", name: 'Mandar',age:28,address:"New York" }
];


@Component({
    moduleId: module.id,
    selector: 'root-app',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']
})


export class AppComponent {
    public headerStr = "User App";
    public version = "2.1";     
    public userList = []; 
    constructor() {        
    }
    ngOnInit(){
     this.userList = USERS; 
    }
}