import { PVP } from './Battle';
import Character from './Character';

const newPlayer = new Character('player1');

const newPlayer2 = new Character('player2');

const battle = new PVP(newPlayer, newPlayer2);

console.log(battle.fight());