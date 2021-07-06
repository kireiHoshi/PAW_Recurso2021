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

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'locations', component: LocationsComponent },
  { path: 'location-info/:id', component: LocationInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
