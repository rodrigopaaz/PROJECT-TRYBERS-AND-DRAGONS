"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player, player2) {
        super(player);
        this._player = player;
        this._player2 = player2;
    }
    fight() {
        const battle = () => {
            this._player2.attack(this._player);
            this._player.attack(this._player2);
        };
        while (this._player2.lifePoints > 0
            && this._player.lifePoints > 0) {
            battle();
            if (this.player.lifePoints < 0)
                break;
        }
        return this._player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVP;
