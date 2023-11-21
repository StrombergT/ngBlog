import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  constructor(private postService: PostService) {}

  // Getter function to retrieve all unique tags from posts
  get tags(): string[] {
    // an array to store all unique tags
    let all: string[] = [];

    // Loop through each post in the PostService, and a loop through eatch tag in post, check if tag is in array. if not, the tag adds in the array
    for (let post of this.postService.posts) {
      for (let tag of post.tags) {
        if (!all.includes(tag)) {
          all.push(tag);
        }
      }
    }
    // return all tags
    return all;
  }
}
