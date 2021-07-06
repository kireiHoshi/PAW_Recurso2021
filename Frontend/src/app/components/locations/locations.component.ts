import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import { LocationService } from '../../services/location.service';
import { FormBuilder, FormGroup } from '@angular/forms';



//esta é a página para mostrar todas
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any;
  query: any;
  form: FormGroup;
  user: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private locationService : LocationService,
    public authentication: AuthenticationService,
    private formBuilder: FormBuilder,) {

      let user = JSON.parse(localStorage.getItem('currentUser') || 'N/A');

      this.route.queryParams.subscribe((params: any) => {
        this.query = params;
  
      })

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
    let params: HttpParams = new HttpParams({ fromObject: this.query });
    this.http.get('http://localhost:4200/api/locations', { params: params })
      .subscribe((res: any) => {
        this.locations = res.locations;
      })
  }

  edit(location: any) {
    let id: string = location._id;
    this.locationService.editLocation(id, this.form).subscribe((result) => { 
      this.router.navigate(['http://localhost:4200/api/locations']); }
      ); 
  }

  delete(location: any): void {
    let id: string = location._id;
    let name: string = location.name;
    if (confirm(`Do you wish to delete the location ${name}?`)) {
      this.locationService.deleteLocation(id).subscribe((res: any) => {
        window.location.reload();
      })
    }
  }

}
