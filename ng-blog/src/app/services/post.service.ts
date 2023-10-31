/*import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private localPosts: Post[] = [];

  constructor() {
    this.localPosts = this.loadLocalData();
  }

  private loadLocalData(): Post[] {
    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public getPosts(): Post[] {
    return this.localPosts;
  }
  public addPost(title: string, body: string, thumbnailUrl: string) {
    this.localPosts.push({
      id: this.localPosts.length + 1,
      title,
      body,
      thumbnailUrl,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    });
    localStorage.setItem('posts', JSON.stringify(this.localPosts));
  }
}*/

import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: Post[] = [];

  constructor() {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    }
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(title: string, body: string, thumbnailUrl: string): void {
    const newPost: Post = {
      id: this.posts.length + 1,
      title: title,
      body,
      thumbnailUrl: thumbnailUrl,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    this.posts.push(newPost);
    this.savePostsToLocalStorage();
  }

  likePost(postId: number): void {
    const post = this.getPostById(postId);
    if (post) {
      post.likes++;
      this.savePostsToLocalStorage();
    }
  }

  dislikePost(postId: number): void {
    const post = this.getPostById(postId);
    if (post) {
      post.dislikes++;
      this.savePostsToLocalStorage();
    }
  }

  getPostById(id: number): Post | undefined {
    const post = this.posts.find((post) => post.id === id);
    console.log('getPostById:', post); // Logga post till konsolen för att se om den returnerar ett inlägg
    return post;
  }

  /*  addComment(postId: number, comment: string): void {
    const post = this.getPostById(postId);
    if (post) {
      post.comments.push(comment);
      this.savePostsToLocalStorage();
    }
  }*/

  removePost(postId: number): void {
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
      this.savePostsToLocalStorage();
    }
  }

  private savePostsToLocalStorage(): void {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
