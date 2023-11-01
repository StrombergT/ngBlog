import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
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
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.postService.getPostById(postId);
    if (this.post) {
      this.comments = this.commentService.getCommentsForPost(postId);
    }
  }

  public likePost(postId: number) {
    if (this.post) {
      this.postService.likePost(postId);
      this.post = this.postService.getPostById(postId);
    }
  }

  public dislikePost(postId: number) {
    if (this.post) {
      this.postService.dislikePost(postId);
      this.post = this.postService.getPostById(postId);
    }
  }

  public addComment(postId: number, newComment: string) {
    if (newComment.trim() !== '') {
      const userName = this.viewService.isAdmin() ? 'Admin' : 'User';
      this.commentService.addComment(postId, newComment, userName);
      const comment: Comment = {
        id: '',
        body: newComment,
        name: userName,
        postId: postId,
      };
      this.comments.push(comment);
    }
  }

  public removePost(postId: number) {
    if (this.viewService.isAdmin()) {
      this.postService.removePost(postId);
    }
  }
  navigateBackToHome(): void {
    this.router.navigate(['/home']);
  }
}
