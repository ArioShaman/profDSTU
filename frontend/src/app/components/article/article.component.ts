import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Angular2TokenService, AuthData, UserData } from "angular2-token";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {


  public article;
  public scrolled = false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var offset = window.pageYOffset
    if(offset >= 500){
      this.scrolled = true;
    }else{
      this.scrolled = false;
    }
  } 

  constructor(
    public authTokenService:Angular2TokenService,
    public acRoute : ActivatedRoute,
    public api: ApiService,
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.acRoute.params.subscribe((data : any)=>{
      if(data && data.id){
        this.api.get("article/"+data.id).subscribe(
          res =>{
            console.log(res);
            this.article = res;
          }
       );
      }
    });
  }

}
