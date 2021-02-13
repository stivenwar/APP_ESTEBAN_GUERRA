import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Serie} from '../../modelos/serie';
import {ActionSheetController} from '@ionic/angular';
import {Puntuacion} from '../../modelos/Puntuacion';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {

   constructor(public dataSevice: DataService,
               private activatedRoute: ActivatedRoute) { }
      series: Serie;
    porcentaje = 0.5;
      puntuacion: Puntuacion;
     slideOpts = {
        initialSlide: 1,
        speed: 400
    };

  ngOnInit() {
      this.getSerie();
  }
  getSerie(){
      const id = this.activatedRoute.snapshot.params.id;
      console.log(id);
      this.dataSevice.getSerie(id).subscribe((res => {
          this.series = (res as Serie);
          console.log(this.series);
      }));

  }

    mostrar() {
        if (document.getElementById('label').hidden === true){
            document.getElementById('label').hidden = false;
        }else {
            if (document.getElementById('label').hidden === false){
                document.getElementById('label').hidden = true;
            }
        }
    }


    enviar(puntuacion: Puntuacion, formulario: NgForm) {
        this.dataSevice.postPuntuacion(puntuacion).subscribe(res => {
            console.log(res);
        });
    }

    cambiarRango(event) {
        this.porcentaje = event.detail.value * 0.01;
    }
}
