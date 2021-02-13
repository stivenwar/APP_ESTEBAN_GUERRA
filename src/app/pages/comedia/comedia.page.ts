import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interfaces';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.page.html',
  styleUrls: ['./comedia.page.scss'],
})
export class ComediaPage implements OnInit {

  series: Observable<any>;
  componentes: Componente[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.series = this.dataService.getSeries();
    console.log(this.series);

  }

}
