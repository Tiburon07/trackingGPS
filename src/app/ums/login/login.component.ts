import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuComponent } from '../../menu/menu.component';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';

interface Jwt {
  access_token: string;
  token_type: string;
  expires_in: number;
  user_name: string;
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, private authUmsService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signIn(form: NgForm) {
    if (!form.valid) this.toastr.error('Credenziali non valide');
    else
      this.authUmsService.signIn(form.value.email, form.value.password).subscribe(
        (payload: Jwt) => {
          this.router.navigate(['/ums']);
        },
        ({message:msg, name:title}) => {
          this.toastr.error(msg, title);
        }
    );
  }
}
