import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Posts', component: PostsComponent },
  { path: '', component: PostsComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
