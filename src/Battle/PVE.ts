import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _character: Fighter,
    private _monsters: SimpleFighter[],
  ) {
    super(_character);
  }

  fight(): number {
    this._monsters.forEach((element) => {
      while (this._character.lifePoints > 0 && element.lifePoints > 0) {
        this._character.attack(element);
        element.attack(this._character);
      }
    });

    return super.fight();
  }
}