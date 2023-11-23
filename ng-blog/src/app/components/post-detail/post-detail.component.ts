import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId: number = 0;
  post: Post | undefined;
  comments: Comment[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    public viewService: ViewService
  ) {}

  // get the post details using the PostService and postId.
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = parseInt(params['id']); // Extract the 'id' parameter, parse it as an integer, and assign it to postId.
      this.post = this.postService.getPostById(this.postId);
      this.comments = this.commentService.getCommentsForPost(this.postId) || [];
    });
  }

  // Function to handle liking a post
  likePost(): void {
    if (this.post) {
      this.postService.likePost(this.post.id);
    }
  }

  // Function to handle disliking a post
  dislikePost(): void {
    if (this.post) {
      this.postService.dislikePost(this.post.id);
    }
  }

  // Function to handle adding a new comment
  addComment(): void {
    // Add the comment to the comment service, update the comments list, and reset the new comment
    this.commentService.addComment(this.post!.id, this.newComment, 'Anonymous');
    this.comments = this.commentService.getCommentsForPost(this.post!.id) || [];
    this.newComment = '';
  }

  // Function for admin to handle removing a comment
  removeComment(commentId: string): void {
    this.commentService.removeComment(commentId);
    this.comments = this.commentService.getCommentsForPost(this.postId) || [];
  }

  // Function for admin to handle removing the post
  removePost(): void {
    if (this.post) {
      // Check if the post exists before removing it, then navigate back to the home page
      this.postService.removePost(this.post.id);
      this.router.navigate(['/home']);
    }
  }

  // Function to navigate back to the home page
  navigateBackToHome(): void {
    this.router.navigate(['/home']);
  }
}
