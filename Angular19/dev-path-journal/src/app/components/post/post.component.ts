import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
post?: Post | undefined;
constructor(private route: ActivatedRoute, private postService: PostService) { }

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.postService.getPostById(id).subscribe((post: Post | undefined) => {
    this.post = post;
  });

}
}
