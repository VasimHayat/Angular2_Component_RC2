import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {UserDetailComponent} from './user-detail.component';

const USERS: User[] = [
  { id: "EMP_0001", name: 'Mr. Nice',age:19,address:"New York" },
  { id: "EMP_0002", name: 'Narco',age:20,address:"South Wells" },
  { id: "EMP_0003", name: 'Bombasto' ,age:22,address:"London"},
  { id: "EMP_0004", name: 'Celeritas' ,age:21,address:"South City"},
  { id: "EMP_0005", name: 'Magneta' ,age:27,address:"New York"},
  { id: "EMP_0006", name: 'RubberMan' ,age:25,address:"New York"},
  { id: "EMP_0007", name: 'Dynama' ,age:19,address:"New York"},
  { id: "EMP_0008", name: 'Dr IQ' ,age:30,address:"New York"},
  { id: "EMP_0009", name: 'Magma' ,age:22,address:"New York"},
  { id: "EMP_0010", name: 'Tornado',age:28,address:"New York" }
];

 

@Component({
    moduleId: module.id,
    selector: 'user-component',
    templateUrl: 'user.component.html' ,
    directives: [UserDetailComponent] 
})
export class UserComponent implements OnInit {    
    public userList = [];
    public selectedUser:User;
    constructor() {        
    }
    ngOnInit(){
     this.userList = USERS;
     this.selectedUser = this.userList[0];
    }
     openUser(user:User) { 
        this.selectedUser = user;
    }  
}