"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        var _this = this;
        this.size = function () {
            return _this.items.length;
        };
        this.add = function (value) {
            _this.items.push(value);
        };
        this.removeWithIndex = function (index) {
            _this.items.splice(index, 1);
        };
        this.removeWithObj = function (value) {
            _this.items.forEach(function (obj, index) {
                if (obj === value) {
                    _this.items.splice(index, 1);
                    return;
                }
            });
        };
        this.get = function (index) {
            return _this.items[index];
        };
        this.array = function () {
            return _this.items;
        };
        this.items = [];
    }
    return List;
}());
exports.default = List;
