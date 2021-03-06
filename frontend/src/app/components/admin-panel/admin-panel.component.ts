import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  constructor(
    public authService:AuthService,
    public authTokenService:Angular2TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.authTokenService.userSignedIn()){
        this.router.navigateByUrl('/');
    }
  }
}
