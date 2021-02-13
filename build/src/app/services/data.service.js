import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.info = {};
        this.url = 'assets/data/series.json';
    }
    getMenuOpts() {
        return this.http.get('assets/data/menu.json');
    }
    getInformacion() {
        return this.http.get('assets/data/series.json');
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map