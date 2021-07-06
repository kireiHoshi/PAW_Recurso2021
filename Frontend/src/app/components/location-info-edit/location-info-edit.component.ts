import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-location-info-edit',
  templateUrl: './location-info-edit.component.html',
  styleUrls: ['./location-info-edit.component.css']
})
export class LocationInfoEditComponent implements OnInit {

  query: any = {};

  form: FormGroup;
  id: any;
  regions:any;

  constructor(
    private http: HttpClient,
    private locationService: LocationService,
    private regionService: RegionService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

      this.form = this.formBuilder.group({
        name: '',
        address: '',
        region: '',
        photo: '',
        description: ''
      })

     }

  ngOnInit(): void {

    this.regionService.getRegions().subscribe((res: any) => {
      this.regions = res.regions;
    });

    this.route.params.subscribe( params =>
    this.id = params['id']
    )

    this.http.get('http://localhost:4200/api/locations/' + this.id)
      .subscribe((res: any) => {
        this.form = this.formBuilder.group({
          name: res.location.name,
          address: res.location.address,
          region: res.location.region._id,
          photo:res.location.photo,
          description: res.location.description
        })
      })
  }

  edit() {
    this.locationService.editLocation(this.id, this.form).subscribe((result) => { 
      this.router.navigate(['/locations']); }
      ); 
  }

}
