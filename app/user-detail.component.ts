import{Component,OnInit,Input} from "@angular/core";
import{User} from "./user.model";


@Component({
    moduleId : module.id,
    selector:"user-detail-component",
    templateUrl : "user-detail.component.html"
})

export class UserDetailComponent implements OnInit{
    @Input()
    user : User;
    constructor(){}
    ngOnInit(){
        console.log(this.user);
    }
}