import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { CacheService, CacheStoragesEnum } from 'ng2-cache';
@Injectable({
  providedIn: 'root'
})

export class ShareBarService {

  public open:boolean;
  public openChange: Subject<boolean> = new Subject<boolean>();

  constructor(private cache: CacheService) { 
    if (this.cache.get('open')){
      this.open = this.cache.get('open');
    }else{
      this.open = false;
      this.cache.set('open', this.open);
    }
  }

  public get(){
    return this.open;
  }

  public change(){
    this.cache.set('open', !this.open);
    this.open = !this.open;
    console.log(this.open);
    this.openChange.next(this.open);
  }
}
