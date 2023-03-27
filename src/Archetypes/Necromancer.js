"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
    }
    get name() {
        return this.name;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        this._instances += 1;
        return this._instances;
    }
}
exports.default = Necromancer;
Necromancer._instances = 0;
