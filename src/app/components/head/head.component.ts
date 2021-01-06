import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interfaces';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {

  /**
   * @Input para crear titulos en cada pagina
   */
  @Input() titulo: string;
  @Input() image: string;
  constructor() { }

  ngOnInit() {}

}
