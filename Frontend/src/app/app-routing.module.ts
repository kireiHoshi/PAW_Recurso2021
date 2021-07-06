import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationInfoComponent } from './components/location-info/location-info.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { LocationInfoEditComponent } from './components/location-info-edit/location-info-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'locations', component: LocationsComponent },
  { path: 'locationedit/:id', component: LocationInfoEditComponent },
  { path: 'location-info/:id', component: LocationInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profileform/:id', component: ProfileFormComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
