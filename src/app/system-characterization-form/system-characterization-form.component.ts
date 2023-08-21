import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-system-characterization-form',
  templateUrl: './system-characterization-form.component.html',
  styleUrls: ['./system-characterization-form.component.css'],
})
export class SystemCharacterizationFormComponent {
  systemCharacterizationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.systemCharacterizationForm = this.formBuilder.group({
      // Define form controls and their initial values here
      name: '',
      description: '',
      // Add more form controls as needed
    });
  }

  submitCharacterization() {
    const formData = this.systemCharacterizationForm.value;
    this.apiService.submitCharacterization(formData).subscribe((response) => {
      console.log('Characterization submitted:', response);
      // Add code to handle successful submission or error
    });
  }
}
