import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
 posts: Post[] = [];

 constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe((data: Post[]) => {
      console.log(data);
      this.posts = data;
    });
  }
  

}
