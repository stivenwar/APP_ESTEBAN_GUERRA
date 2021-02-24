import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Serie} from '../../modelos/serie';
import {ActionSheetController, ToastController} from '@ionic/angular';
import {Puntuacion} from '../../modelos/Puntuacion';
import {NgForm} from '@angular/forms';
import {Componente} from '../../interfaces/interfaces';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage implements OnInit {

   constructor(public dataSevice: DataService,
               private activatedRoute: ActivatedRoute,
               private miToast: ToastController) { }
      series: Serie[];
      punto: Puntuacion[];
      pTotal = 0;
      contador = 0;
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

  ngOnInit() {
      this.cogerPuntuacion();
      this.getSerie();
  }
   getSerie(){
      const id = this.activatedRoute.snapshot.params.id;
      console.log(id);
      this.dataSevice.getSerie(id).subscribe((res => {
          this.series = (res as Serie[]);
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
    async enviar(puntuacion: Puntuacion, formulario: NgForm) {

        this.dataSevice.postPuntuacion(puntuacion).subscribe(res => {
            console.log(res);
            formulario.resetForm();
        });
        const toast = await this.miToast.create({
            position: 'bottom',
            buttons: [
                {
                    side: 'start',
                    icon: 'mail-outline',
                    text: 'Puntuación enviada',
                    handler: () => {
                        console.log('enviado');
                    }
                }, {
                    text: 'SALIR',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        await toast.present();
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
            console.log(this.pTotal);
            console.log(this.pTotal.toFixed(2));
        }));
    }
}

