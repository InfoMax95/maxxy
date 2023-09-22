import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}posts`);
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}posts/get-post?id=${id}`);
  }

  public insertPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}posts`, post);
  }

  public deletePost(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}posts?id=${id}`);
  }
}
