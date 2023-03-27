"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player, monster) {
        super(player);
        this._monster = monster;
        this._player = player;
        if (monster.length === 0) {
            this._monster = monster;
        }
    }
    battle(monster) {
        while (this._player.lifePoints > 0 || monster.lifePoints > 0) {
            monster.attack(this._player);
            this._player.attack(monster);
            if (this.player.lifePoints < 0 || monster.lifePoints < 0)
                break;
        }
    }
    fight() {
        this._monster.forEach((e) => {
            this.battle(e);
        });
        return this._player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVE;
