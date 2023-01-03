import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ng-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  hide = true;
  signinForm: FormGroup;
  loginId: string = '';
  loginPassword: string = '';

  @ViewChild('password') private password?: ElementRef;

  constructor(private router: Router, private formBuilder: FormBuilder, public userService: UserService) {
    this.signinForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required, Validators.maxLength(128), Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)])
    });
  }

  enter() {
    if (this.password) {
      this.password.nativeElement.focuse();
    }
  }

  authenticate() {
    this.signinForm.markAllAsTouched();
    if (this.signinForm.valid) {
      this.userService.authenticate(this.loginId, this.loginPassword).subscribe(() => {
        this.toHome();
      });
    }
  }

  toHome() {
    const params = this.router.parseUrl(this.router.url).queryParams;
    if (params && params['url']) {
      this.router.navigate([params['url']]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
