import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _totalInstances = 0;
  
  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._totalInstances += 1;
  }

  static createdRacesInstances(): number {
    if (this._totalInstances === 0) throw new Error('Not implemented');
    return this._totalInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}