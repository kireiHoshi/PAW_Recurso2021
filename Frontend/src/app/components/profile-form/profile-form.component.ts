import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  query: any = {};

  form: FormGroup;
  id: string;
  user: any;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.user = JSON.parse(localStorage.getItem('currentUser') || 'N/A');
      this.id = this.user._id;

      this.form = this.formBuilder.group({
        name: this.user.name,
        oldPassword: '',
        newPassword: ''
      })
  }

  ngOnInit(): void { }

  edit(): void {
    console.log(this.form.getRawValue());
    this.userService.editProfile(this.id,this.form).subscribe((res: any) => {
      localStorage.setItem('currentUser', res.user);
      this.router.navigate(['/profile']);
    })
  }

}
