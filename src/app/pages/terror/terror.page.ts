import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Serie} from '../../modelos/serie';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interfaces';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage implements OnInit {
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
                if (numero.categorias[this.contador] === 'terror'){
                    this.series2 = this.series;
                    console.log(this.series2);
                }
            }
        });
        console.log(this.series);

    }

}
