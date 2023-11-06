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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.post = this.postService.getPostById(this.postId);
      this.comments = this.commentService.getCommentsForPost(this.postId) || [];
    });
  }

  likePost(): void {
    if (this.post) {
      this.postService.likePost(this.post.id);
    }
  }

  dislikePost(): void {
    if (this.post) {
      this.postService.dislikePost(this.post.id);
    }
  }

  addComment(): void {
    if (this.newComment.trim() !== '') {
      if (this.post) {
        this.commentService.addComment(
          this.post.id,
          this.newComment,
          'Anonymous'
        );
        this.comments =
          this.commentService.getCommentsForPost(this.post.id) || [];
        this.newComment = '';
      }
    }
  }

  removeComment(commentId: string): void {
    this.commentService.removeComment(commentId);
    this.comments = this.commentService.getCommentsForPost(this.postId) || [];
  }

  removePost(): void {
    if (this.post) {
      this.postService.removePost(this.post.id);
      this.router.navigate(['/home']);
    }
  }

  navigateBackToHome(): void {
    this.router.navigate(['/home']);
  }
}
