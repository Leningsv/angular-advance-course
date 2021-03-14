import {Player2Class} from './player2.class';

describe('Player2 test', () => {
  let player2: Player2Class;
  beforeEach(() => {
    player2 = new Player2Class();
  });
  it('take damage more than 100', () => {
    let auxHp = 0;
    player2.hpHandler.subscribe(hp => {
      auxHp = hp;
    });
    player2.takeDamage(1000);
    expect(auxHp).toBe(0);
  });

  it('take damage 50', () => {
    let auxHp = 0;
    player2.hpHandler.subscribe(hp => {
      auxHp = hp;
    });
    player2.takeDamage(50);
    expect(auxHp).toBe(50);
  });
});
