import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from "./services/auth.service";
import { ApiService} from "./services/api.service";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ShareBarService} from "./services/share-bar.service";
import { Ng2CacheModule } from 'ng2-cache';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ArticleComponent,
    LoginComponent,
    SidebarComponent,
    AdminPanelComponent,
    CreateArticleComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2CacheModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [
    Angular2TokenService, 
    AuthService,
    ShareBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
