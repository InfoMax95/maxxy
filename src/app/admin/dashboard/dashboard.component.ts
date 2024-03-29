import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public posts: Post[] | undefined;

  constructor(private postService: PostsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public onDelete(id: number): void {
    this.postService.deletePost(id).subscribe({
      next: (response: string) => {
        response = "Delete successfully!";
        this.toastr.success(response);
        this.getPosts();
      },
      error: err => console.log(err)
    })
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
