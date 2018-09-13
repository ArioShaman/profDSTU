import { Component, OnInit } from '@angular/core';
import { ShareBarService } from '../../services/share-bar.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
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

  public openSidebar(){
    this.share.change();
  }
}
