import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location) { 

  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postsService.getPost(id)
      .subscribe(post => this.post = post);
  }

  save(): void {
    if (this.post) {
      this.postsService.updatePost(this.post)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
