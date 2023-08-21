import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrls: ['./report-generation.component.css'],
})
export class ReportGenerationComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  generateReport() {
    this.apiService.generateReport().subscribe((response) => {
      console.log('Report generated:', response);
      // Add code to handle successful report generation or error
    });
  }
}
