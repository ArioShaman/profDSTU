import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public testNews:Array<any> = [
    {
      id: 1,
      url: '/assets/images/test-images/test-01.png',
      title: 'Открылся новый фонтан на площади Гагарина при ДГТУ',
    },
    {
      id: 2,
      url: '/assets/images/test-images/test-02.png',
      title: 'В столовых ДГТУ появились мидии и филе миньон',
    },
    {
      id: 3,
      url: '/assets/images/test-images/test-03.png',
      title: 'Девушки заблудились в лесу и вместо поиска выхода решили сделать фотосет',
    },
    {
      id: 4,
      url: '/assets/images/test-images/test-04.png',
      title: 'Ростов прекрасен Да, это сатира',
    },
    {
      id: 5,
      url: '/assets/images/test-images/test-05.png',
      title: 'Для корректной работы с ОС студентам ДГТУ подарят Mac books',
    },
    {
      id: 6,
      url: '/assets/images/test-images/test-06.png',
      title: 'Преподы ДГТУ решают кого отчислить)',
    }                      
  ];
  
  public fakeNews:Array<any> = [
    {
      height: '270'
    },
    {
      height: '400'
    },
    {
      height: '250'
    },
    {
      height: '230'
    },
    {
      height: '340'
    },
    {
      height: '230'
    },                    
  ];
  
  public news:Array<any>;
  
  public loaded = false;
  constructor() { }

  ngOnInit() {
    
    setTimeout(()=>{
      this.news = this.testNews;
      this.loaded = true;
    }, 1000);

  }

}
