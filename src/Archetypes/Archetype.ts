import { EnergyType } from '../Energy';

export default abstract class Archetype {
  public special = 0;
  public cost = 0;
  
  constructor(private _name: string) { }

  get name(): string {
    return this._name;
  }

  get getSpecial(): number {
    return this.special;
  }

  get getCost(): number {
    return this.cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}