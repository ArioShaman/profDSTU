import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { FormGroup, Validators, FormBuilder,FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.sass']
})
export class CreateArticleComponent implements OnInit {
  public Article = {
    title: '',
    cover: undefined,
    htmlText: '',    
  };

  publ
  constructor(
    public authService:AuthService,
    public authTokenService:Angular2TokenService,
    private router: Router,
    public api: ApiService,    
  ) { }

  ngOnInit() {
    if(!this.authTokenService.userSignedIn()){
        this.router.navigateByUrl('/');
    }      
  }

  create(){
    console.log(this.Article);
    this.authTokenService.post("article", this.Article).subscribe(
      res =>{
        console.log(res);
      }
    );    
  }

  validateFile(file) {
    let name:string = file['name'];
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'jpg') {
      return true;
    }
    else {
      return false;
    }
  }

  onFileChanged(e){
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.Article.cover = reader.result;
    }
    this.validateFile(file);
  }

}
