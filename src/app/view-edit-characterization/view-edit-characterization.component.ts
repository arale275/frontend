import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

interface CharacterizationResponse {
  // Define the properties based on your API response
}

@Component({
  selector: 'app-view-edit-characterization',
  templateUrl: './view-edit-characterization.component.html',
  styleUrls: ['./view-edit-characterization.component.css'],
})
export class ViewEditCharacterizationComponent implements OnInit {
  characterizationId: string = '';
  characterization: CharacterizationResponse | null = null;
  characterizationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.characterizationForm = this.formBuilder.group({
      name: [''],
      description: [''],
      // Add more form controls as needed
    });
  }

  ngOnInit(): void {
    this.characterizationId = this.route.snapshot.paramMap.get('id')!;
    this.loadCharacterization();
  }

  loadCharacterization() {
    this.apiService
      .submitCharacterization(this.characterizationId)
      .subscribe((response: CharacterizationResponse) => {
        this.characterization = response;
        this.characterizationForm.patchValue(response);
      });
  }

  updateCharacterization() {
    const formData = this.characterizationForm.value;
    this.apiService.submitCharacterization(formData).subscribe((response) => {
      console.log('Characterization updated:', response);
      // Add code to handle successful update or error
    });
  }
}
