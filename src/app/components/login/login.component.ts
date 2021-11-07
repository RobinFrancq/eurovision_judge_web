import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/httpClientServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  usernameFormControl: FormControl = new FormControl('', [Validators.required]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    console.log(this.loginForm);
    this.userService.loginUser(this.usernameFormControl.value, this.passwordFormControl.value).subscribe((result: string) => {
      console.log(result);
    });
  }
  register(): void {
    // TODO...
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup({
      username: this.usernameFormControl,
      password: this.passwordFormControl
    });
  }

}
