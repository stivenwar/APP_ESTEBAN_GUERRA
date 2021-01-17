import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage implements OnInit {
  slides = [
    {img: 'assets/images/accion.jpg'
    },
    {img: 'assets/images/comedia.jpg'
    },
    {img: 'assets/images/terror.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
