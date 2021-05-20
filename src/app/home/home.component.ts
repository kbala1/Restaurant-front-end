import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
declare const M;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [NgbCarouselConfig]
})
export class HomeComponent {

  images: any[] = ['fries1.jpeg', 'beverage1.jpeg', 'burger1.jpeg', 'chinese1.jpeg'].map(name => 'assets/images/' + name);

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;

    }
}
