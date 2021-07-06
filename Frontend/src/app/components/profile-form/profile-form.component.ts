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

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      newpassword: ''
    })
  }

  ngOnInit(): void { }

  edit(): void {
    console.log(this.form.getRawValue());
    this.userService.editProfile(this.id,this.form).subscribe((res: any) => {
      window.location.reload();
    })
  }

}
