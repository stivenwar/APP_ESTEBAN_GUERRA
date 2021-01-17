import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

  slides = [
      {img: 'assets/images/accion.jpg'
      },
    {img: 'assets/images/comedia.jpg'
    },
    {img: 'assets/images/terror.jpg'
    }
      ];
  action: any = [];
  action2: any = [];
   i = 0;
  constructor(private dataSevice: DataService) { }

  series: Observable<any>;
  ngOnInit(): void {
  // this.series = this.dataSevice.getInformacion();
  this.dataSevice.getInformacion().subscribe(result => {
    this.action = result;
    this.action.forEach((value) => {
      if (value.categoria === 'acción') {
      this.action2[this.i] = value;
      console.log(this.action2);
      this.i++;
      }
    });
  });
  }
}

