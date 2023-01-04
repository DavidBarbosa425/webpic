import { Observable, observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { UserService } from './../user/user.service';
import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit{

    user$?: Observable<User| null>;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.user$ = this.userService.getUser()
    }

}