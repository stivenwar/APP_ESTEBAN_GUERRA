import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HeadComponent = class HeadComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], HeadComponent.prototype, "titulo", void 0);
__decorate([
    Input()
], HeadComponent.prototype, "image", void 0);
HeadComponent = __decorate([
    Component({
        selector: 'app-head',
        templateUrl: './head.component.html',
        styleUrls: ['./head.component.scss'],
    })
], HeadComponent);
export { HeadComponent };
//# sourceMappingURL=head.component.js.map