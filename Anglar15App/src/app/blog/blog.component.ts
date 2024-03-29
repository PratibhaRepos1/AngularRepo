import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs:any;

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getPost()
    .subscribe(response => {
      this.blogs = response;
    });
  }
}
