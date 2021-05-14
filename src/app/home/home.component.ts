import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
declare const M;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [NgbCarouselConfig]
})
export class HomeComponent {

  // constructor() {
  //   document.addEventListener('DOMContentLoaded', function() {
  //     let elems = document.querySelectorAll('.carousel');
  //     let options = {duration: 200};
  //     let instances = M.Carousel.init(elems, options);
  //   });
  // }
  images: any[] = ['fries1.jpeg', 'beverage1.jpeg', 'burger1.jpeg', 'chinese1.jpeg'].map(name => 'assets/images/' + name);

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    // document.addEventListener('DOMContentLoaded', function() {
    //   let elems = document.querySelectorAll('.carousel');
    //   let instances = M.Carousel.init(elems, options);
    // });
    // instance.next();
    // instance.next(3); // Move next n times.

    // $(document).ready(function(){
    //   $('.carousel').carousel();
    // });
    //  instance = M.Carousel.init({
    //   fullWidth: true,
    //   indicators: true
    // });

  }
}
