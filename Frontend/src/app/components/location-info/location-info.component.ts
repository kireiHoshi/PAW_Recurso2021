import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent implements OnInit {

  location: any;
  user: any;
  name: string = '';
  description: string = '';
  photo: string = '';
  comments: any;
  likes: any;
  dislikes: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id;
    this.route.params.subscribe( params =>
      id = params['id']
    )

    this.user = JSON.parse(localStorage.getItem('currentUser') || 'N/A');

    this.http.get('http://localhost:4200/api/locations/' + id)
      .subscribe((res: any) => {
        this.location = res.location;
        this.name = this.location.name;
        this.description = this.location.description;
        this.photo = this.location.photo;
        this.likes = this.location.likes;
        this.dislikes = this.location.dislikes;
      })
    
  }

  negativeRatio(): boolean  {

    return(this.likes<this.dislikes)

  }

}
