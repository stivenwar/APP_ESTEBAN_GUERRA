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

      punto: Puntuacion[];
      pTotal = 0;
      contador = 0;
     slideOpts = {
        initialSlide: 1,
        speed: 400
    };

  ngOnInit() {
      this.getSerie();
      this.cogerPuntuacion();
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
            formulario.resetForm();
        });
    }
    cogerPuntuacion() {
        this.dataSevice.getPuntuacion().subscribe((res => {
            this.punto = (res as Puntuacion[]);
            console.log(this.punto);
            for (const numero of this.punto){
                    this.contador++;
                    this.pTotal += numero.puntuacion;
            }
            this.pTotal = this.pTotal / this.contador;
            console.log(this.pTotal.toFixed(2));
        }));
    }
}
