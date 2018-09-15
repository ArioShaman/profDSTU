import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { Angular2TokenService } from 'angular2-token';
import {AuthService} from "./services/auth.service";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ShareBarService} from "./services/share-bar.service";
import { Ng2CacheModule } from 'ng2-cache';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ArticleComponent,
    LoginComponent,
    SidebarComponent,
    AdminPanelComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2CacheModule,
  ],
  providers: [
    Angular2TokenService, 
    AuthService,
    ShareBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
