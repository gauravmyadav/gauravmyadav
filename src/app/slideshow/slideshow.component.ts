import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class SlideshowComponent implements OnInit {
  currentIndex = 0;
  photos: string[] = [
    'assets/IMG_20220310_205045.jpg',
    'assets/IMG_20230514_144912.jpg',
    'assets/IMG_20230714_100853.jpg',
    'assets/IMG-20220118-WA0005.jpg',
    'assets/IMG-20221108-WA0014.jpg',
    'assets/IMG-20221206-WA0028.jpg',
    'assets/IMG-20221216-WA0006.jpg',
    'assets/photo (1).jpg',
    'assets/photo (2).JPG',
    'assets/photo (3).jpg',
    'assets/photo (4).JPG',
    'assets/photo (5).JPG',
    'assets/photo (6).jpg',
    'assets/photo (7).jpg',
    'assets/photo (8).jpg',
    'assets/photo (9).jpg',
    'assets/photo (10).jpg',
    'assets/photo (11).jpg',
    'assets/photo (12).jpg',
    'assets/photo (13).jpg',
    'assets/photo (14).jpg',

    // Add more photo paths here
  ];
  weddingDate: Date = new Date('2023-12-15T00:00:00Z');
  daysRemaining: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    }, 2000); // Change slide every 3 seconds
    this.calculateDaysRemaining();

  }


  private calculateDaysRemaining() {
    const currentDate = new Date();
    const timeDifference = this.weddingDate.getTime() - currentDate.getTime();
    this.daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  }
}
