class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Team {
  constructor() {
    this.characters = [];
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;
    return {
      next() {
        if (index < characters.length) {
          return { value: characters[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

  add(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('Only instances of Character can be added to the team');
    }
  }
}


const char1 = new Character('Лучник1', 'Bowman', 50, 1, 40, 10);
const char2 = new Character('Лучник2', 'Bowman', 50, 1, 40, 10);

const team = new Team();
team.add(char1);
team.add(char2);

for (let character of team) {
  console.log(character);
}
