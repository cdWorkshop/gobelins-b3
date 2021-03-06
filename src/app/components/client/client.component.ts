import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true,
    navText: [ '<div class="test_nav_right"><i class="ti-angle-right"></i></div>', '<div class="test_nav_left"><i class="ti-angle-left"></i></div>' ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
