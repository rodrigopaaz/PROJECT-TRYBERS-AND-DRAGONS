"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 74;
    }
    get name() {
        return this.name;
    }
    get dexterity() {
        return this.dexterity;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        this._instances += 1;
        return this._instances;
    }
}
exports.default = Orc;
Orc._instances = 0;
