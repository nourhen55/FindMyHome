import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/maison.service'; // Make sure this path is correct

@Component({
  selector: 'app-property-management',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropertyManagementComponent implements OnInit {
  properties: any[] = [];  // Array to store properties fetched from JSON

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // Fetch data from maison.json via HomeService
    this.homeService.getHomes().subscribe(data => {
      this.properties = data;
    });
  }
}