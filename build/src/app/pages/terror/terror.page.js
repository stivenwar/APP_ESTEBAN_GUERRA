import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TerrorPage = class TerrorPage {
    constructor() {
        this.slides = [
            { img: 'assets/images/accion.jpg'
            },
            { img: 'assets/images/comedia.jpg'
            },
            { img: 'assets/images/terror.jpg'
            }
        ];
    }
    ngOnInit() {
    }
};
TerrorPage = __decorate([
    Component({
        selector: 'app-terror',
        templateUrl: './terror.page.html',
        styleUrls: ['./terror.page.scss'],
    })
], TerrorPage);
export { TerrorPage };
//# sourceMappingURL=terror.page.js.map