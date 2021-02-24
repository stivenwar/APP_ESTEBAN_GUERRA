import {Component, OnInit, ViewChild} from '@angular/core';
import {Componente} from '../../interfaces/interfaces';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';
import {Serie} from '../../modelos/serie';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    series: Serie[];
    aux: Serie [] = [];
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
    contador = 4;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getSeries().subscribe(res => {
          this.series = (res as Serie[]);
          for (let i = 0; i < 4; i++){
              this.aux.push(this.series[i]);
          }
      });
  }

    loadData(event: any) {
        console.log('......Cargando siguientes');
        setTimeout( () => {
            if (this.aux.length === this.series.length){
                event.target.complete();
                this.infiniteScroll.disabled = true;
                return;
            }
            for (let i = 0; i < 2; i++){
                if (this.series[this.contador] ){
                    this.aux.push(this.series[this.contador]);
                    console.log(this.aux);
                    this.contador++;
                }
            }
            event.target.complete();
        }, 2000);
    }
}
