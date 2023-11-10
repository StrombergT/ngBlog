import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css'],
})
export class TagFilterComponent {
  tag: string = '';

  constructor(
    private postService: PostService,
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.params.subscribe((params) => (this.tag = params['name']));
  }

  get posts(): Post[] {
    return this.postService.posts.filter((all) => all.tags.includes(this.tag));
  }
}