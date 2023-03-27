import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;

  private _strength = 63;

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) { this._lifePoints -= attackPoints; }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1; 
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);  
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }
}