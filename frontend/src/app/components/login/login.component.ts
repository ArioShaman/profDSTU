import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthUser} from '../../models/auth-user';
import {Angular2TokenService} from "angular2-token";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Output() onFormResult = new EventEmitter<any>();
  public authUser = new AuthUser('', '');
  constructor(
    public authService:AuthService,
    private tokenAuthSerivce:Angular2TokenService,
    private router: Router
  ) { 
  }

  ngOnInit() {

  }

  onSubmit(){
    this.authService.logInUser(this.authUser).subscribe(() => this.router.navigate(['/']));

  }

}
