import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  public post: Post | undefined;

  constructor(private fb: FormBuilder, private postService: PostsService,
    private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  updateForm: FormGroup = this.fb.group({
    title: ["null", Validators.compose([Validators.required,Validators.minLength(5)])],
    subtitle: ["null", Validators.compose([Validators.required,Validators.minLength(5)])],
    mainContent: ["null", Validators.compose([Validators.required,Validators.minLength(5)])],
    addNotes: ["null", Validators.compose([Validators.required,Validators.minLength(5)])],
    insights: ["null", Validators.compose([Validators.required,Validators.minLength(5)])],
    description: ["null", Validators.compose([Validators.required,Validators.minLength(5)])],
  });

  ngOnInit(): void {
    this.getRoute();
  }

  public onSave(): void {
    console.log("sto salvando");
    console.log(this.updateForm.value);
    // let fieldValue = this.updateForm.value;
    // const post: Post = {
    //   title: fieldValue["title"],
    //   firstContent: fieldValue["subtitle"],
    //   SecondContent: fieldValue["mainContent"],
    //   ThirdContent: fieldValue["addNotes"],
    //   Subtitle: fieldValue["insights"],
    //   description: fieldValue["description"],
    //   CategoryId: 1,
    //   UserId: 1
    // }

    // this.postService.insertPost(post).subscribe({
    //   next: (response: Post) => {
    //     console.log(response);
    //     this.toastr.success("Post inserito correttamente!");
    //     this.updateForm.reset();
    //   },
    //   error: err => console.log(err)
    // })
  }

  private getRoute() {
    let idString: string | null = this.route.snapshot.paramMap.get("id");
    let idInt: number;
    if (idString) {
      idInt = +idString;
      this.getPost(idInt);
    }
  }

  private getPost(id: number) {
    this.postService.getPost(id).subscribe({
      next: (response: Post) => {
        if (!response) {
          this.toastr.error("errore nel ricevere i dati per il post, controllare chiamata in network!");
          return;
        }
        this.post = response;
      },
      error: err => console.log(err)
    })
  }

  private onValueChanges() {
    this.updateForm.valueChanges
    .pipe(
      map((value) => {
        value.firstName = value.firstName.toUpperCase();
        return value;
      }),
      filter((value) => this.updateForm.valid)
    )
    .subscribe((value) => {
      console.log("Reactive Form valid value: vm = ", JSON.stringify(value));
    });
  }

}
