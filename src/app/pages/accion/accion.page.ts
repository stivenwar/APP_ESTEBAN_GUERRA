import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Serie} from '../../modelos/serie';


@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {


  action: any = [];

   i = 0;
  constructor(private dataSevice: DataService) { }

  series: Serie[];
  ngOnInit() {
    this.dataSevice.getSeries()
        .subscribe(res => {
              this.series = (res as Serie[]);

              console.log(this.series);
            },
            error => console.error(error));
  }
}
/*
 this.dataSevice.getSeries().subscribe(result => {
   this.action = result;
   this.action.forEach((value) => {
     if (value.categoria === 'acción') {
     this.action2[this.i] = value;
     console.log(this.action2);
     this.i++;
     }
   });
 });

    */
