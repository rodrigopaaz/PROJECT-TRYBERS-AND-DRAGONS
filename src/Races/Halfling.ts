import Race from './Race';

export default class Halfling extends Race {
  protected _maxLifePoints = 60;
  protected static _instances = 0;
    
  public get name(): string {
    return this.name;
  }

  public get dexterity(): number {
    return this.dexterity;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._instances += 1;
    return this._instances;
  }
}