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

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    const posts = this.http.get<Post[]>(this.postsUrl, {
    });
    return posts;
  }
}
