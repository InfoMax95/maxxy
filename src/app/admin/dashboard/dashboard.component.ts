import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public posts: Post[] | undefined;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public onDelete(event: any): void {
    console.log(event);
  }

  private getPosts() {
    this.postService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: err => console.log(err)
    })
  }

}
