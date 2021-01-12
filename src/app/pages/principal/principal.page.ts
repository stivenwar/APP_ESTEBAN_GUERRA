import {Component, OnInit, ViewChild} from '@angular/core';
import {Componente} from '../../interfaces/interfaces';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    /*serieslist: {titulo: string, imagen: string, sinopsis: string}[] = series;*/
    seriesInfo: Observable<any>;
  componentes: Componente[] = [];
  data: any[] = [
      'assets/images/accion.jpg',
      'assets/images/comedia.jpg',
      'assets/images/terror.jpg'
  ];
  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.seriesInfo = this.dataService.getInformacion();

  }
}
