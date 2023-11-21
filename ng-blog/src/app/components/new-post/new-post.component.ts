import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ViewService } from 'src/app/services/view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  title: string = '';
  content: string = '';
  thumbnailUrl = '';
  tagsInput: string = '';
  tags: string[] = [];

  constructor(
    private postService: PostService,
    private viewService: ViewService,
    private router: Router
  ) {}

  ngOnInit() {
    this.viewService.getUser().subscribe((userStatus) => {
      if (userStatus !== 'admin') {
        // If user status is not admin, navigate away from New Post component
        this.router.navigate(['/']);
      }
    });
  }
  uploadPost(): void {
    if (this.viewService.isAdmin()) {
      // Check if the user is an admin
      this.tags = this.tagsInput.split(',').map((tag) => tag.trim()); // Split the tagsInput string into an array of tags

      // Call the addPost method of the PostService to add a new post
      this.postService.addPost(
        this.title,
        this.content,
        this.thumbnailUrl,
        this.tags
      );

      // Navigate to home page after uploading post
      this.router.navigate(['/']);
    }
  }
}
