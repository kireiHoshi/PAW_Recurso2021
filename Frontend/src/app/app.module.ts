import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptors/auth-interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationInfoComponent } from './components/location-info/location-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LikedislikeComponent } from './components/likedislike/likedislike.component';
import { MapComponent } from './components/map/map.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationInfoEditComponent } from './components/location-info-edit/location-info-edit.component';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationInfoComponent,
    NavbarComponent,
    LikedislikeComponent,
    MapComponent,
    CommentsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PagenotfoundComponent,
    HomeComponent,
    HomepageComponent,
    ProfileFormComponent,
    LocationFormComponent,
    LocationsComponent,
    LocationInfoEditComponent,
    CommentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
