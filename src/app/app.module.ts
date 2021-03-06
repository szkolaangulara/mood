import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoodComponent } from './mood/mood.component';
import { BadMoodComponent } from './bad-mood/bad-mood.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodComponent,
    BadMoodComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
