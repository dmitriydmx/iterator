class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}

module.exports = Team;
