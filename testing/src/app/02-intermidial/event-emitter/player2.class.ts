import {EventEmitter} from '@angular/core';

export class Player2Class {
  public hp: number;
  public hpHandler = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  public takeDamage(damage: number): void {
    if (damage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damage;
    }
    this.hpHandler.emit(this.hp);
  }
}
