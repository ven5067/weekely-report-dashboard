import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    isAdmin$ = new BehaviorSubject(false);
   
    public authenticate(user) {
        this.isAdmin$.next(user.username === 'Admin' && user.password === 'password');
    }

    public logout() {
        this.isAdmin$.next(false);
    }

}