import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable, Subscription} from 'rxjs';



@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

  accion: Observable<any>;
  a: Subscription;
  constructor(private dataSevice: DataService) { }

  series: Observable<any>;
  ngOnInit() {
  this.series = this.dataSevice.getInformacion();
  }
}

