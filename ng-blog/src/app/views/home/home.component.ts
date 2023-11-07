import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private postService: PostService, private router: Router) {}
  post: Post | undefined;

  get posts(): Post[] {
    return this.postService.posts;
  }

  navigateToPostDetails(postId: number): void {
    this.router.navigate(['/blog', postId]);
  }
}
