import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Serie} from '../../modelos/serie';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.page.html',
  styleUrls: ['./terror.page.scss'],
})
export class TerrorPage implements OnInit {
  constructor(private dataSevice: DataService) { }

  series: Serie[];
  ngOnInit() {
    this.dataSevice.getSeries()
        .subscribe(res => {
              this.series = (res as Serie[]);

              console.log(this.series);
            },
            error => console.error(error));
  }

}
