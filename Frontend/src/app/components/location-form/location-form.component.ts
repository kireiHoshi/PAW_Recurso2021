import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { RegionService } from '../../services/region.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {

  regions:any;
  user: any;

  query: any = {};

  form: FormGroup;

  constructor(private locationService: LocationService,
    private regionService: RegionService,
    private formBuilder: FormBuilder,
    private router: Router) { 

      let user = JSON.parse(localStorage.getItem('currentUser') || 'N/A');

      this.regionService.getRegions().subscribe((res: any) => {
        this.regions = res.regions;
      });

      this.form = this.formBuilder.group({
        author: user._id,
        name: '',
        address: '',
        region: '',
        photo:'',
        description: ''
      })
    }

  ngOnInit(): void {
  }

  submit(): void {

    console.log(this.form.getRawValue());
    this.locationService.createLocation(this.form).subscribe((res: any) => {
      window.location.reload();
    })

  }
  

}
