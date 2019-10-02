import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {

  }
  @Output() routerChanged: EventEmitter<any> = new EventEmitter();

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        this.name.hasError('required') ? 'You must enter a value' :
          this.password.hasError('required') ? 'You must enter a value' : '';
  }

  signIn() {
    console.log('anmelden click test');
    console.log('email click test', this.email.valid);
    console.log('pass click test', this.password.valid);
    if (this.password.valid && this.email.valid) {
      this.http.post<any>('http://localhost:4001/user/login', {email: this.email.value, password: this.password.value})
        .subscribe(item => {
          console.log('item', localStorage.getItem('userID'));

          localStorage.setItem('userID', item._id);
          console.log('item', localStorage.getItem('userID'));
          this.router.navigate(['module-a']);

        },
          () => {
          console.log('error test');
          localStorage.setItem('userID', null);
          });
    }
  }

}
