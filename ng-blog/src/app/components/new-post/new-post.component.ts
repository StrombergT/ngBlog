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
  thumbnailUrl: string = '';

  constructor(
    private postService: PostService,
    private viewService: ViewService,
    private router: Router
  ) {}

  onPostAdded() {
    if (
      this.viewService.isAdmin() &&
      this.title &&
      this.content &&
      this.thumbnailUrl
    ) {
      // Kontrollera att både titel och innehåll finns innan du sparar posten
      this.postService.addPost(this.title, this.content, this.thumbnailUrl); // Du kan lägga till en URL för thumbnail här om det behövs
      this.title = ''; // Återställ titeln efter att posten har sparats
      this.content = ''; // Återställ innehållet efter att posten har sparats
      this.thumbnailUrl = '';
      alert('New post added');
      this.router.navigate(['/home']);
    } else {
      alert('Please enter both title and content.');
    }
  }
}
/*import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ViewService } from 'src/app/services/view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  title: string = ''; // Declare title as a string
  content: string = ''; // Declare content as a string

  constructor(
    private postService: PostService,
    private viewService: ViewService,
    private router: Router
  ) {}

  uploadPost(): void {
    let user = this.viewService.getUser();
    if (!user) this.postService.addPost(this.title, this.content);
    // Navigate the user to the home page after the post has been uploaded
    this.router.navigate(['/']);
  }
}*/
