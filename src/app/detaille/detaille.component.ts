import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // For HTTP requests
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detaille',
  templateUrl: './detaille.component.html',
  styleUrls: ['./detaille.component.css']
})
export class DetailleComponent implements OnInit {
  homeId: string | null = null;
  homeDetails: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the home id from the route parameter
    this.homeId = this.route.snapshot.paramMap.get('id');

    if (this.homeId) {
      // Fetch the home details from the maison.json file based on the ID
      this.http.get<any[]>('assets/bd/maison.json').subscribe((homes) => {
        // Find the home that matches the ID
        this.homeDetails = homes.find((home) => home.id === this.homeId);
      });
    }
  }
  isRequestSubmitted = false;

  // Method to handle button click
  submitRequest() {
    this.isRequestSubmitted = true;

    // Optionally, you can reset the message after some time, for example, after 5 seconds:
    setTimeout(() => {
      this.isRequestSubmitted = false;
    }, 5000); // Hide the message after 5 seconds
  }
}
