import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PrincipalPage = class PrincipalPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.componentes = [];
        this.data = [
            'assets/images/accion.jpg',
            'assets/images/comedia.jpg',
            'assets/images/terror.jpg'
        ];
    }
    ngOnInit() {
        this.seriesInfo = this.dataService.getInformacion();
    }
};
PrincipalPage = __decorate([
    Component({
        selector: 'app-principal',
        templateUrl: './principal.page.html',
        styleUrls: ['./principal.page.scss'],
    })
], PrincipalPage);
export { PrincipalPage };
//# sourceMappingURL=principal.page.js.map