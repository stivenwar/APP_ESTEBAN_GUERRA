import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {AccionPage} from '../pages/accion/accion.page';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  info: any = {};
  private url = 'assets/data/series.json';
  constructor(private http: HttpClient) { }
  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }
  getInformacion(){
    return this.http.get('assets/data/series.json');
  }

}
