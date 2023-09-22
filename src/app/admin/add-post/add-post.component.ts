import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router,
    private postService: PostsService) { }

  addForm: FormGroup = this.fb.group({
    title: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    subtitle: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    mainContent: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    addNotes: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    insights: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
    description: [null, Validators.compose([Validators.required,Validators.minLength(5)])],
  });

  ngOnInit(): void {
  }

  public onSave(): void {
    console.log("sto salvando");
    let fieldValue = this.addForm.value;
    const post: Post = {
      Title: fieldValue["title"],
      FirstContent: fieldValue["subtitle"],
      SecondContent: fieldValue["mainContent"],
      ThirdContent: fieldValue["addNotes"],
      Subtitle: fieldValue["insights"],
      Description: fieldValue["description"],
      CategoryId: 1,
      UserId: 1
    }

    this.postService.insertPost(post).subscribe({
      next: (response: Post) => {
        console.log(response);
        this.toastr.success("Post inserito correttamente!");
        this.addForm.reset();
      },
      error: err => console.log(err)
    })
  }

}
