import { Component, OnInit } from '@angular/core';
import { appGlobals } from 'src/app/global/app.globals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly appGlb = appGlobals;
  loginFormGroup: any;
  constructor(public fb: FormBuilder, public userSerive: UserService, public router: Router) { }

  ngOnInit() {
    this.loginFormGroup =  this.fb.group({
      userName: ['', [ Validators.required, Validators.pattern(appGlobals.validationsInfo.email)]]
    });
  }


  login() {
    this.userSerive.setUserName(this.loginFormGroup.getRawValue().userName);
    console.log(this.userSerive.getUserName());
    this.router.navigate(['home']);
  }

}
