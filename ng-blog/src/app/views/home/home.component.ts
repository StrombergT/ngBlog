import { Component } from '@angular/core';
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

  // Getter function to fetch and sort posts based on creation date
  get posts(): Post[] {
    return this.postService.posts.sort((a, b) => {
      return (
        new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
      );
    });
  }
  // Function to navigate to the details page of a specific post and Router to navigate to blog page.
  navigateToPostDetails(postId: number): void {
    this.router.navigate(['/blog', postId]);
  }
}
