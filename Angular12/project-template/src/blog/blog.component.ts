import { Component } from '@angular/core';

@Component ({
    selector: 'app-blog',
    templateUrl: './blog.component.html'

})
export class BlogComponent {
    blogId: number = 10;
    blogStatus: string = "offline";


    getBlogStatus() {
        return this.blogStatus;
    }

}