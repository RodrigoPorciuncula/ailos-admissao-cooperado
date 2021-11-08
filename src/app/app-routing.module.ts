import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AdjustComponent } from './pages/adjust/adjust.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [
  {path: '',   redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'home', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'adjust', component: AdjustComponent},
  {path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
