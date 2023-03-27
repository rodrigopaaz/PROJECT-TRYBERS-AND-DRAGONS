import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player:Fighter | Character, 
    private _monster:Fighter[] | SimpleFighter[],
  ) { super(_player); }

  battle(monster:Fighter | SimpleFighter) {
    while (this._player.lifePoints > 0 || monster.lifePoints > 0) {
      monster.attack(this._player);
      this._player.attack(monster);
      if (this.player.lifePoints <= 0 || monster.lifePoints <= 0) break;
    }
  }
  
  fight():number {
    this._monster.forEach((e) => {
      this.battle(e);
    });
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}
