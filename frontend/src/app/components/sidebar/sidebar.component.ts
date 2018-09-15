import { Component, OnInit } from '@angular/core';
import { ShareBarService } from '../../services/share-bar.service'
import {Angular2TokenService} from "angular2-token";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public open:boolean;

  constructor(
    public authService:AuthService,
    public authTokenService:Angular2TokenService,
    private router: Router,
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

  public logOut(){
     this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }
}
