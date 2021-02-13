import {Component, OnInit, ViewChild} from '@angular/core';
import {Componente} from '../../interfaces/interfaces';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
    series: Observable<any>;
  componentes: Componente[] = [];
    slideopts = {
        initialSlide: 1,
        speed: 2000
    };

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.series = this.dataService.getSeries();
      console.log(this.series);

  }
}
