import Character from './Character';

const newPlayer = new Character('player1');
newPlayer.receiveDamage(100);
newPlayer.receiveDamage(100);
newPlayer.receiveDamage(100);
newPlayer.receiveDamage(500);
newPlayer.receiveDamage(100);
newPlayer.receiveDamage(100);
newPlayer.receiveDamage(100);
newPlayer.receiveDamage(500);

console.log(newPlayer.lifePoints);