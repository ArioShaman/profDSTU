import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {


  public article = {
      id: 1,
      url: '/assets/images/test-images/test-02.png',
      title: 'Открылся новый фонтан на площади Гагарина при ДГТУ',

  }
  public scrolled = false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var offset = window.pageYOffset
    if(offset >= 500){
      this.scrolled = true;
    }else{
      this.scrolled = false;
    }
  } 

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
