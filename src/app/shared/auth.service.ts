import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../_models/user';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  public Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { 
    this.loggedIn = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('loggedIn') === null ? 'false' : 'true'));
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user: User) {
    if (user.username == 'admin' && user.password == 'admin') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('company', user.company);
      this.Toast.fire({
        icon: 'success',
        title: 'Welcome to SaleAdmin!'
      });
      // localStorage.setItem('currentUser', JSON.stringify(user));
    }
    else{
      this.Toast.fire({
        icon: 'error',
        title: 'username or password was wrong.'
      })
    }
  }

  logout() {
    this.loggedIn.next(false);
    // this.currentUserSubject.next(null);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('company');
    this.router.navigate(['/login']);
  }
}
