import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private postService: PostService
  ) {
    activatedRoute.params.subscribe((params) => (this.id = params['id']));
  }
  post: Post | undefined;

  get posts(): Post[] {
    return this.postService.posts;
  }
}
