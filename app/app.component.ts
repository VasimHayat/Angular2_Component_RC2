import { Component } from '@angular/core';
import {User} from "./user.model";
import {UserComponent} from './user.component';


@Component({
    moduleId: module.id,
    selector: 'root-app',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css'],
    directives :[UserComponent]
})


export class AppComponent {
    public headerStr = "User App";
    public version = "2.1";     
}