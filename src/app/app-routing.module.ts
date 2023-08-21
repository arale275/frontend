import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'; // Import MainPageComponent
import { ViewEditCharacterizationComponent } from './view-edit-characterization/view-edit-characterization.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SystemCharacterizationFormComponent } from './system-characterization-form/system-characterization-form.component';
import { ReportGenerationComponent } from './report-generation/report-generation.component'; // Import the ReportGenerationComponent

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route to main page
  { path: 'main', component: MainPageComponent }, // Add MainPageComponent route
  {
    path: 'view-edit-characterization/:id',
    component: ViewEditCharacterizationComponent,
  },
  { path: 'user-registration', component: UserRegistrationComponent },
  {
    path: 'system-characterization',
    component: SystemCharacterizationFormComponent,
  },
  { path: 'report-generation', component: ReportGenerationComponent }, // Add the report-generation route
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
