import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Serie} from '../../modelos/serie';
import {Componente} from '../../interfaces/interfaces';
import {Serie2} from '../../interfaces/interfazSerie';


@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

    series: Serie[];
    series2: Serie[] = [];
    contador: 0;
    componentes: Componente[] = [];
    slideopts = {
        initialSlide: 1,
        autoplay: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    };
    c: Serie2[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getSeries().subscribe(result => {
            this.series = (result as Serie[]);
            for (const numero of this.series){
                for (const cat of numero.categorias){
                    if (cat  === 'Acción'){
                        this.series2.push(numero);
                        console.log(this.series2);
                    }
                }
            }
        });
    }
}
