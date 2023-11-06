export interface Post {
  id: number;
  title: string;
  body: string;
  thumbnailUrl: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: Comment[];
}
