import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // Array to store comments
  public comments: Comment[] = [];

  // load comments from local storage
  constructor() {
    this.comments = this.loadLocalStorage();
  }

  // Function to get all comments
  public getComments(): Comment[] {
    return this.comments;
  }

  // Function to add a new comment and create a new comment
  public addComment(postId: number, body: string, name: string): void {
    const newComment: Comment = {
      id: (this.comments.length + 1).toString(),
      body: body,
      name: name || 'Anonymous',
      postId: postId,
    };

    // Add the new comment to the comments array and save to local storage
    this.comments.push(newComment);
    this.saveLocalStorage();
  }

  // Function to get all comments for a specific post
  public getCommentsForPost(postId: number): Comment[] {
    return this.comments.filter((comment) => comment.postId === postId);
  }

  // Function to remove a comment (Admin)
  public removeComment(commentId: string): void {
    const index = this.comments.findIndex(
      (comment) => comment.id === commentId
    );
    if (index !== -1) {
      this.comments.splice(index, 1);
      this.saveLocalStorage();
    }
  }

  // Private function to load comments from local storage
  private loadLocalStorage(): Comment[] {
    let storedComments = localStorage.getItem('comments');
    return !storedComments ? [] : JSON.parse(storedComments);
  }

  // Private function to save comments to local storage
  private saveLocalStorage(): void {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}
