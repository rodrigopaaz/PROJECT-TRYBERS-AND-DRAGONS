import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  protected static _instances = 0;
  protected _energyType:EnergyType;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
  }

  get name():string {
    return this.name;
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._instances += 1;
    return this._instances;
  }
}