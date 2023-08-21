import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SystemCharacterizationFormComponent } from './system-characterization-form/system-characterization-form.component';
import { ViewEditCharacterizationComponent } from './view-edit-characterization/view-edit-characterization.component';
import { ReportGenerationComponent } from './report-generation/report-generation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MainContentComponent } from './main-content/main-content.component';
import { GoogleAuthComponentTsComponent } from './google-auth.component.ts/google-auth.component.ts.component';
import { FacebookAuthComponentTsComponent } from './facebook-auth.component.ts/facebook-auth.component.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    SystemCharacterizationFormComponent,
    ViewEditCharacterizationComponent,
    ReportGenerationComponent,
    MainPageComponent,
    MainContentComponent,
    GoogleAuthComponentTsComponent,
    FacebookAuthComponentTsComponent,
  ], // List of components declared in the module
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to the imports array
    AppRoutingModule, // Add any other modules you want to import here
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [], // List of services provided by the module
  bootstrap: [AppComponent], // The main component to bootstrap
})
export class AppModule {}
