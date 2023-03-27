import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monster:Fighter[] | SimpleFighter[];
  private _player:Fighter | Character;
  constructor(
    player:Fighter | Character, 
    monster:Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._monster = monster;
    this._player = player;
    if (monster.length === 0) {
      this._monster = monster;
    }
  }

  battle(monster:Fighter | SimpleFighter) {
    while (this._player.lifePoints > 0 || monster.lifePoints > 0) {
      monster.attack(this._player);
      this._player.attack(monster);
      if (this.player.lifePoints < 0 || monster.lifePoints < 0) break;
    }
  }
  
  fight():number {
    this._monster.forEach((e) => {
      this.battle(e);
    });
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}
