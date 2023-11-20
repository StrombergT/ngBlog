import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  public comments: Comment[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  public addComment(postId: number, body: string, name: string): void {
    const newComment: Comment = {
      id: (this.comments.length + 1).toString(),
      body: body,
      name: name || 'Anonymous',
      postId: postId,
    };

    this.comments.push(newComment);
    this.saveLocalStorage();
  }

  public getCommentsForPost(postId: number): Comment[] {
    return this.comments.filter((comment) => comment.postId === postId);
  }

  public removeComment(commentId: string): void {
    const index = this.comments.findIndex(
      (comment) => comment.id === commentId
    );
    if (index !== -1) {
      this.comments.splice(index, 1);
      this.saveLocalStorage();
    }
  }

  private loadLocalStorage(): void {
    let storedComments = localStorage.getItem('comments');
    this.comments = storedComments ? JSON.parse(storedComments) : [];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}
