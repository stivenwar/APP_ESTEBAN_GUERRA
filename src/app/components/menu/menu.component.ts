import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interfaces';
import {DataService} from '../../services/data.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  /**
   * creamos servicio componentes
   */
  componentes: Observable<Componente[]>;

  /**
   * inyectamos el servicio
   */
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
