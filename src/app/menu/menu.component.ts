import { Component, OnInit } from '@angular/core';
import { AuthService } from '../ums/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../ums/models/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isUserLoggedIn = false;

  constructor(private authUmsService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout(e: any) {
    this.authUmsService.logout();
    this.router.navigate(['login/ums'])
  }

  login(e: any) {
    this.isUserLoggedIn = this.authUmsService.isUserLoggedIn();
    this.router.navigate(['login/ums'])
  }

  signUp(e: any) {
    this.router.navigate(['signup/ums'])
  }
}
