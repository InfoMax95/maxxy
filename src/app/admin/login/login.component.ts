import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) { }

  // FORM
  form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.compose([Validators.required])),
    password: new FormControl("", Validators.compose([Validators.required])),
  });

  ngOnInit(): void {
  }

  // login method
  public login() {
    if(this.form.valid) {
      let formValue = this.form.value;
      let user = new UserLogin(formValue.username, formValue.password);
      this.authService.login(user).subscribe({
        next: result => {
          this.router.navigateByUrl("dashboard");
        },
        error: err => {
          console.log(err);
          this.toastr.error(err.error);
        },
        complete: () => {}
      })
    }
  }

}
