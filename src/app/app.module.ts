import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GithubService} from './service/github.service';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule} from '@angular/forms';

import {Ng2PaginationModule} from 'ng2-pagination';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
