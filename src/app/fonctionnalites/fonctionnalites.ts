import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-fonction',
  templateUrl: './fonctionnalites.html',
  styleUrls: ['./fonctionnalites.css'],
})
export class FonctionnalitesComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.initCarousel();
  }

  initCarousel() {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn') as HTMLButtonElement;
    const nextBtn = document.querySelector('.next-btn') as HTMLButtonElement;
    let currentIndex = 0;

    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }
}
