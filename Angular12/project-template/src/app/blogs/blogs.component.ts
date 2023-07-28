import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  allNewBlog = false;
  blogCreationStatus = 'No Blog was created';
  blogName = 'Leader\'s Rule';
  blogCreated = false;

  constructor() {

    setTimeout(() => {
      this.allNewBlog = true
    }, 3000);
   }

  ngOnInit(): void {
  }
  onCreateBlog() {
    this.blogCreated = true;
    this.blogCreationStatus = 'Blog was created!';
  }

  onUpdateBlogName(event: any) {
   // console.log(event);
   this.blogName = (<HTMLInputElement>event.target).value;

  }

}
