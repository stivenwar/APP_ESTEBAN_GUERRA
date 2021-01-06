import {Component, OnInit, ViewChild} from '@angular/core';
import {Componente} from '../../interfaces/interfaces';
import series from 'src/assets/data/series.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    serieslist: {titulo: string, imagen: string, sinopsis: string}[] = series;
  componentes: Componente[] = [];
  data: any[] = [
      'assets/images/accion.jpg',
      'assets/images/comedia.jpg',
      'assets/images/terror.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }
}
