import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  @Input() location: any;
  query: any;
  form: FormGroup;
  @Input() user: any;

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

      

     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: this.user,
      location: this.location,
      text: ''
    })
  }

  createComment() {
      this.http.post(`http://localhost:4200/api/comments`, this.form.getRawValue())
      .subscribe((res: any) => {
        location.reload();
      });
  }

}
