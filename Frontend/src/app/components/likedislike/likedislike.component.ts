import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likedislike',
  templateUrl: './likedislike.component.html',
  styleUrls: ['./likedislike.component.css']
})
export class LikedislikeComponent implements OnInit {

  @Input() likes: any;
  @Input() dislikes: any;
  @Input() location: any;
  user: any;
  

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('currentUser') || 'N/A');
   }

  ngOnInit(): void {
  }

  likeButtonClick() {
    this.http.post('http://localhost:4200/api/likes', { location: this.location._id , user: this.user._id })
      .subscribe((res: any) => {
        this.likes.push(res.like)
      })
  }

  dislikeButtonClick() {
    this.http.post('http://localhost:4200/api/dislikes', { location: this.location._id , user: this.user._id })
    .subscribe((res: any) => {
      this.dislikes.push(res.dislike)
    })
  }
}
