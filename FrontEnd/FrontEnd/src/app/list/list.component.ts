import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Post[] = [];
  selectedPost?: Post;
  
  constructor(private postsService: PostsService) { 
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }

  edit(post: Post): void {
    this.selectedPost = post;
  }

  add(content: string, photoUrl: string): void {
    if (!content) { return; }
    this.postsService.addPost({ content, photoUrl } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }
  
  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.deletePost(post.id).subscribe();
  }
}
