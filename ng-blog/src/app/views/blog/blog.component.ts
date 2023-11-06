import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  id: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => (this.id = params['id']));
  }
}
