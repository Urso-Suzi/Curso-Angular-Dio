import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {MenuComponent} from './app/components/menu.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[BrowserModule, FormsModule],
  declarations: [AppComponent, MenuComponent],

  bootstrap: [AppComponent],
})

export class AppModule {}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

 

