import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  private postsUrl = 'assets/data/posts.json'; // centralized

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostById(id: number): Observable<Post | undefined> {
    return this.getPosts().pipe(
      map((posts: Post[]) => posts.find(post => post.id === id))
    );
  }
}
