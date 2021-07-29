import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthService } from '../../services/oauth/oauth.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm : FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private oauth: OauthService,
              private logger: LoggerService) { }

  ngOnInit() {
    this.buildForm();
  }
  /**
   * This method initialized the the formGroup element. Its properties and the validators.
   *
   * @method buildForm
   * @return
   */
  buildForm() {
    this.userForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  /**
   * This method returns the values of the form controls.
   *
   * @return
   */
  get form() { return this.userForm.controls; }
  /**
   * This method is triggered on success, it reroutes the user to main page.
   *
   * @return
   */
  onSuccess() {
    this.logger.info("LoginComponent:: You are Successfuly logged in!");
    this.router.navigate(['main']);
  }
  /**
   * This method is triggered when user clicks log-in, it calls the aunthenication method
   * from oauth service.
   *
   * @return 
   */
  login() {
    this.oauth.authenticateUser( this.form.username.value, this.form.password.value, this.onSuccess.bind(this));
  }
}
