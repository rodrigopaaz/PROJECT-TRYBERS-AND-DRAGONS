export default abstract class Race {
  private _name: string;
 
  private _dexterity:number;

  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  } 

  protected static instances = 0;

  static createdRacesInstances():number {
    this.instances += 1;
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}