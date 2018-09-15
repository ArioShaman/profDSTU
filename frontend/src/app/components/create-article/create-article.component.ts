import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.sass']
})
export class CreateArticleComponent implements OnInit {

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
