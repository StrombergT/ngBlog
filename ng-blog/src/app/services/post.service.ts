import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // Array to store posts
  public posts: Post[] = [];

  // load posts from local storage
  constructor() {
    this.posts = this.loadLocalStorage();
  }

  // Function to get all posts
  public getPosts(): Post[] {
    return this.posts;
  }

  // Function to add a new post
  public addPost(
    title: string,
    body: string,
    thumbnailUrl: string,
    tags: string[]
  ): void {
    // Create a new post
    const newPost: Post = {
      id: this.posts.length + 1,
      title: title,
      body: body,
      tags: tags,
      thumbnailUrl: thumbnailUrl,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    // Add the new post to the posts array and save to local storage
    this.posts.push(newPost);
    this.saveLocalStorage();
  }

  // Function like count of a post
  public likePost(postId: number): void {
    const post = this.getPostById(postId);
    if (post) {
      post.likes++;
      this.saveLocalStorage();
    }
  }
  // Function dislike count of a post
  public dislikePost(postId: number): void {
    const post = this.getPostById(postId);
    if (post) {
      post.dislikes++;
      this.saveLocalStorage();
    }
  }

  // Function to get a post by its id
  public getPostById(id: number): Post | undefined {
    const post = this.posts.find((post) => post.id === id);
    return post;
  }

  // Function to remove a post (Admin)
  public removePost(postId: number): void {
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
      this.saveLocalStorage();
    }
  }

  // function to load posts from local storage
  private loadLocalStorage(): Post[] {
    let storedPosts = localStorage.getItem('posts');
    return !storedPosts ? [] : JSON.parse(storedPosts);
  }

  //  function to save posts to local storage
  private saveLocalStorage(): void {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
