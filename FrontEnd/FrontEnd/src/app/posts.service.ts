import { Injectable } from '@angular/core';
import { Post } from './post';
import { Posts } from './mock-posts';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = "https://localhost:5001/Posts";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    const posts = this.http.get<Post[]>(this.postsUrl);
    return posts;
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, this.httpOptions);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions);
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, this.httpOptions);
  }
}
