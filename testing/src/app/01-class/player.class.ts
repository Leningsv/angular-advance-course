export class PlayerClass {
  public hp: number;

  constructor() {
    this.hp = 100;
  }

  public takeDamage(damage: number): void {
    if (damage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damage;
    }
  }
}
