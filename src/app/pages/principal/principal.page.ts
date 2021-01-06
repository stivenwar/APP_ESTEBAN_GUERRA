import {Component, OnInit, ViewChild} from '@angular/core';
import {Componente} from '../../interfaces/interfaces';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScrol: IonInfiniteScroll;
  componentes: Componente[] = [];

  data: any[] = Array(4);
  constructor() { }

  ngOnInit() {

  }

  loadData(event) {
    console.log('CARGANDO SIGUIENTE');

    if (this.data.length > 4){
      event.target.complete();
      this.infiniteScrol.disabled = true;
      return;
    }
    setTimeout(() => {
      const nuevoArr = Array(4);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000);


  }
}
