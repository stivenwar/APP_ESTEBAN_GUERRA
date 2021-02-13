import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AccionPage = class AccionPage {
    constructor(dataSevice) {
        this.dataSevice = dataSevice;
        this.slides = [
            { img: 'assets/images/accion.jpg'
            },
            { img: 'assets/images/comedia.jpg'
            },
            { img: 'assets/images/terror.jpg'
            }
        ];
        this.action = [];
        this.action2 = [];
        this.i = 0;
    }
    ngOnInit() {
        // this.series = this.dataSevice.getInformacion();
        this.dataSevice.getInformacion().subscribe(result => {
            this.action = result;
            this.action.forEach((value) => {
                if (value.categoria === 'acción') {
                    this.action2[this.i] = value;
                    console.log(this.action2);
                    this.i++;
                }
            });
        });
    }
};
AccionPage = __decorate([
    Component({
        selector: 'app-accion',
        templateUrl: './accion.page.html',
        styleUrls: ['./accion.page.scss'],
    })
], AccionPage);
export { AccionPage };
//# sourceMappingURL=accion.page.js.map