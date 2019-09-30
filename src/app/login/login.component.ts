import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient) {

  }

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
      this.http.get<any>('http://localhost:4000/item')
        .subscribe(item => {
          console.log('test http get, items', item);
        });
    }
  }

}
