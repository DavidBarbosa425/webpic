import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component} from '@angular/core';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    user$: Observable<User | null>;


    constructor(private userService: UserService,
                private router: Router) {

      this.user$ = userService.getUser()
    }

    logout(){
      this.userService.logout()
      this.router.navigateByUrl('')
    }
     
    
}