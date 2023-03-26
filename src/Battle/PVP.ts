import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player:Fighter;
  protected _player2:Fighter;

  constructor(player:Fighter, player2:Fighter) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }

  fight():number {
    const battle = () => {
      this._player2.attack(this._player);
      this._player.attack(this._player2);
    };
    while (this._player2.lifePoints > 0 
        && this._player.lifePoints > 0) {
      battle();
      if (this.player.lifePoints < 0) break;
    }
    
    return this._player.lifePoints === -1 ? -1 : 1; 
  }
}
