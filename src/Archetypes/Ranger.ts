import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _totalInstances = 0;

  constructor(
    _name: string,
  ) {
    super(_name);
    this._energyType = 'stamina';
    Ranger._totalInstances += 1;
  }

  static createdArchetypeInstances(): number {
    if (this._totalInstances === 0) throw new Error('Not implemented');
    return this._totalInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}