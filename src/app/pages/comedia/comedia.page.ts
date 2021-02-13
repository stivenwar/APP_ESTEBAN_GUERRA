import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interfaces';
import {DataService} from '../../services/data.service';
import {Serie} from '../../modelos/serie';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.page.html',
  styleUrls: ['./comedia.page.scss'],
})
export class ComediaPage implements OnInit {

  series: Serie[];
  series2: Serie[];
  componentes: Componente[] = [];
  slideopts = {
    initialSlide: 1,
    speed: 2000
  };
  contador = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSeries().subscribe(result => {
      this.series = (result as Serie[]);
      for (const numero of this.series){
        if (numero.categorias[this.contador] === 'comedia'){
          this.series2 = this.series;
          console.log(this.series2);
          this.contador++;
        }
      }
    });
    console.log(this.series);

  }

}
