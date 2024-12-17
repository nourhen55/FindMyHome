import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/maison.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.html',
  styleUrls: ['./liste.css']
})
export class ListeComponent implements OnInit {
  homes: any[] = []; // All homes data
  filteredHomes: any[] = []; 
  searchInput: string = '';
  homeType: string = 'all'; 
  proximity: string = 'all'; // Bind to proximity filter
  priceRange: string = 'all'; // Bind to price range filter

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getHomes().subscribe(
      (data) => {
        this.homes = data; // Store the data
        this.filteredHomes = data; // Initially show all homes
      },
      (error) => {
        console.error('Error fetching homes data', error);
      }
    );
  }

  filterHomes(): void {
    this.filteredHomes = this.homes.filter(home => {
      // Search by name or type
      const matchesSearch = this.searchInput ? 
        home.name.toLowerCase().includes(this.searchInput.toLowerCase()) || 
        home.type.toLowerCase().includes(this.searchInput.toLowerCase()) : true;

      // Filter by home type
      const matchesType = this.homeType !== 'all' ? home.type === this.homeType : true;

      // Filter by proximity
      const matchesProximity = this.proximity !== 'all' ? home.proximity === this.proximity : true;

      // Filter by price range
      let matchesPrice = true;
      if (this.priceRange === 'low') {
        matchesPrice = home.price >= 0 && home.price <= 500;
      } else if (this.priceRange === 'medium') {
        matchesPrice = home.price > 500 && home.price <= 1000;
      } else if (this.priceRange === 'high') {
        matchesPrice = home.price > 1000 && home.price <= 2000;
      }

      // Return true if all conditions match
      return matchesSearch && matchesType && matchesProximity && matchesPrice;
    });
  }
}
