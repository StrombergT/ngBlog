import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

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

/*
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private localComments: Comment[] = [];

  constructor() {
    this.localComments = this.loadLocalData();
  }

  public loadLocalData(): Comment[] {
    let comments = localStorage.getItem('comments');
    return !comments ? [] : JSON.parse(comments);
  }

  public getCommentsForPost(postId: number): Comment[] {
    const postComments: Comment[] = [];
    for (const comment of this.localComments) {
      if (comment.postId === postId) {
        postComments.push(comment);
      }
    }
    return postComments;
  }

  public addComment(postId: number, comment: string, name: string): void {
    this.localComments = this.localComments.filter(
      (comment) => comment.postId !== postId
    );

    const newComment: Comment = {
      id: '',
      body: comment,
      name: 'Anonymous',
      postId: postId,
    };

    this.localComments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(this.localComments));
  }
}*/
