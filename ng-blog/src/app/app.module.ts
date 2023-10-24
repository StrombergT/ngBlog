import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { NewPostComponent } from './components/new-post/new-post.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, NewPostComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
