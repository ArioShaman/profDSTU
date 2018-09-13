import { Component, OnInit } from '@angular/core';
import { ShareBarService } from '../../services/share-bar.service'


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public open:boolean;

  constructor(
    public share: ShareBarService,
  ) { 
      this.share.openChange.subscribe((value) => { 
          this.open = value; 
      }); 
  }

  ngOnInit() {
    this.open = this.share.get();
  }
  public closeSidebar(){
    this.share.change();
  }  

}
