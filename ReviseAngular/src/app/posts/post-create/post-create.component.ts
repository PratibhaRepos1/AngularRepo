import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Post {
  title: string
  content: string

}

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  post: Post;

  @Output() postCreated = new EventEmitter<Post>();



  constructor() {
    this.post = {} as Post;
  }

  ngOnInit(): void {
  }

  onAddPost() {
    const post = {
      title: this.post.title,
      content: this.post.content
    }

    this.postCreated.emit(post);

  }

}
