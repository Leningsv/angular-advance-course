import {PlayerClass} from './player.class';

describe('Class test', () => {
  let player;
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
    player = new PlayerClass();
  });
  afterAll(() => {
    console.log('afterAll');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  it('take damage', () => {
    const resp = player.takeDamage(20);
    expect(player.hp).toBe(80);
  });

  it('take damage  return 50 if take 50 of damage', () => {
    const resp = player.takeDamage(50);
    expect(player.hp).toBe(50);
  });

  it('take more than 100 of damage', () => {
    const resp = player.takeDamage(120);
    expect(player.hp).toBe(0);
  });
});
