import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { BlogComponent } from './views/blog/blog.component';
import { TagsComponent } from './components/tags/tags.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'tags', component: TagsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
