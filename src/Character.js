"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._name = name;
        this._dexterity = (0, utils_1.default)(1, 10);
        this._race = new Races_1.Elf(this._name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(this._name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._defense = (0, utils_1.default)(1, 10);
        this._strength = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    receiveDamage(attackPoints) {
        const calculateDamage = attackPoints - this._defense;
        if (calculateDamage > 0) {
            this._lifePoints -= calculateDamage;
        }
        if (calculateDamage <= 0) {
            this._lifePoints -= 1;
        }
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
            return this._lifePoints;
        }
        return this._lifePoints;
    }
    attack(enemy) {
        const damageCount = this.strength - enemy.lifePoints;
        return damageCount;
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._defense += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        this._lifePoints = this._maxLifePoints;
    }
    special(enemy) {
        const criticalHit = this._strength * 2;
        enemy.receiveDamage(criticalHit);
        return `CRITICAL DAMAGE! ${criticalHit}`;
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return { type_: this._energy.type_, amount: this._energy.amount };
    }
    get name() {
        return this._name;
    }
}
exports.default = Character;
