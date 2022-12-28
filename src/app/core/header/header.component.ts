import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, Input } from '@angular/core';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    user$: Observable<User>;
    user!: User;

    constructor(private userService: UserService) {

      this.user$ = userService.getUser()
      this.user$.subscribe(user => this.user = user)
    }
     
    
}