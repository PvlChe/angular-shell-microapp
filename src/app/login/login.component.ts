import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from '../message.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) {

  }
  @Output() routerChanged: EventEmitter<any> = new EventEmitter();

  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        this.firstname.hasError('required') ? 'You must enter a value' :
          this.lastname.hasError('required') ? 'You must enter a value' :
            this.password.hasError('required') ? 'You must enter a value' : '';
  }

  signIn() {
    if (this.password.valid && this.email.valid) {
      this.userService.login(this.email.value, this.password.value)
        .subscribe(item => {
          localStorage.setItem('userID', item._id);
          this.messageService.signIn(item);
          this.router.navigate(['module-a']);
        },
          () => {
          delete localStorage.userID;
          this.messageService.clearUser();
          });
    }
  }


}
