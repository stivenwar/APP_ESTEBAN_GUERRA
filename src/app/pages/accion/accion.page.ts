import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Serie} from '../../modelos/serie';
import {Componente} from '../../interfaces/interfaces';


@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

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
                if (numero.categorias[this.contador] === 'accion'){
                    this.series2 = this.series;
                    console.log(this.series2);
                    this.contador++;
                }
            }
        });
        console.log(this.series);

    }
}
