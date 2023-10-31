/*import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private localComments: Comment[] = [];

  constructor() {
    this.localComments = this.loadLocalData();
  }

  private loadLocalData(): Comment[] {
    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public get comments(): Comment[] {
    return this.localComments;
  }
  public addPost(id: number, body: string) {
    this.localComments.push({
      id: this.localComments.length + 1,
      body,
    });
    localStorage.setItem('posts', JSON.stringify(this.localComments));
  }
}
*/
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
}
