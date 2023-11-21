import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {
    // Subscribe to changes in route parameters to update 'id' property
    activatedRoute.params.subscribe((params) => (this.id = params['id']));
  }
  // Getter function to retrieve posts from PostService
  get posts(): Post[] {
    return this.postService.posts;
  }
  // Function to navigate to the details page of a specific post
  navigateToPostDetails(postId: number): void {
    this.router.navigate(['/blog', postId]);
  }
}
