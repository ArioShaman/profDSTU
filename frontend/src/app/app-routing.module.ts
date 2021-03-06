import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './components/main/main.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component'
import { AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',             component: MainComponent },
  { path: 'article/:id',      component: ArticleComponent},
  { path: 'auth/login',       component: LoginComponent},
  { path: 'admin',            component: AdminPanelComponent },
  { path: 'admin/article/create',   component: CreateArticleComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}