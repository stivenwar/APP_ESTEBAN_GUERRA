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
    series2: Serie[] = [];
    componentes: Componente[] = [];
    slideopts = {
        initialSlide: 0,
        loop: 1,
        autoplay: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    };
    contador = 0;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getSeries().subscribe(result => {
            this.series = (result as Serie[]);
            for (const numero of this.series){
                for (const cat of numero.categorias){
                    if (cat  === 'Terror'){
                        this.series2.push(numero);
                        console.log(this.series2);
                    }
                }
            }
        });
        console.log(this.series);

    }

}
