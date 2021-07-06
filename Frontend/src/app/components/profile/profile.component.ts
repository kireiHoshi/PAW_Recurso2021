import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  id: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService : UserService,
    public authentication: AuthenticationService
  ) { 
    let user = JSON.parse(localStorage.getItem('currentUser') || 'N/A');
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
}

  ngOnInit(): void {
  }

  edit(user: any): void {
    
  }

  delete(id: string): void {
    if (confirm(`${this.name}, do you wish to delete your account?`)) {
      this.userService.deleteUser(this.id)
      .subscribe((res: any) => {
        this.authentication.logout();
        this.router.navigate(['/homepage']);
      },
      err => {
        console.log(err);
        alert('This user has created locations!')
       // check error status code is 500, if so, do some action
      })
    }
  } 
}
