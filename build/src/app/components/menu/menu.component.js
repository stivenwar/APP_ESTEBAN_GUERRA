import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    /**
     * inyectamos el servicio
     */
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.componentes = this.dataService.getMenuOpts();
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map