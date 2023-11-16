import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent {
  images: string[] = [
    'https://images.pexels.com/photos/373289/pexels-photo-373289.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];
  currentSlideIndex = 0;

  selectSlide(index: number): void {
    console.log('Selecting slide:', index);
    this.currentSlideIndex = index;
  }

  prevSlide(): void {
    console.log('Going to previous slide');
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide(): void {
    console.log('Going to next slide');
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }
}
