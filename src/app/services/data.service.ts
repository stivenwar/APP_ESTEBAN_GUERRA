import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/interfaces';
import {Serie} from '../modelos/serie';
import {Puntuacion} from '../modelos/Puntuacion';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 puntuacion: Puntuacion;
  elegirSerie: Serie;
  serie: Serie[];

  readonly URL = 'http://localhost:3000/api/series';
  readonly URLP = 'http://localhost:3000/api/puntuacion';
  constructor(private http: HttpClient) {
    this.puntuacion = new Puntuacion();
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }
  /*
  getInformacion(){
    return this.http.get('assets/data/series.json');
  }*/
  getSerie(id: string){
    return this.http.get(this.URL + `/${id}`);
  }

  getSeries(){
    return this.http.get(this.URL);
  }
  postPuntuacion(puntuacion: Puntuacion){
    return this.http.post(this.URLP, puntuacion);
  }
  getPuntuacion(){
      return this.http.get(this.URLP);
  }

}
