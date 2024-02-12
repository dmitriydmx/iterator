import Team from './team';

const team = new Team();

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const char2 = {
  name: 'Воин',
  type: 'Swordsman',
  health: 80,
  level: 2,
  attack: 65,
  defence: 20
};

team.add(char1);
team.add(char2);

for (const character of team) {
  console.log(character);
}
