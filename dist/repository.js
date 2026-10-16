"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getById(id) {
        let item = this.items.find(item => item.id === id);
        return item;
    }
    update(id, changes) {
        const item = this.getById(id);
        if (item === undefined) {
            return undefined;
        }
        Object.assign(item, changes);
        return item;
    }
    remove(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }
    filter(predicate) {
        const filteredItems = this.items.filter(predicate);
        return filteredItems;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map