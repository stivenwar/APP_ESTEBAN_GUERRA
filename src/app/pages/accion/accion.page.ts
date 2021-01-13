import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable,  Subscription} from 'rxjs';


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
  constructor(private dataSevice: DataService) { }

  series: Observable<any>;
  ngOnInit(): void {
  // this.series = this.dataSevice.getInformacion();
  this.dataSevice.getInformacion().subscribe(result => {
    this.action = result;
    console.log(result);
  });
  }
}

