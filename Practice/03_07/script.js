/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const squadTeam = {
  squadName: "Plans and Preparation",
  squadPoints: 8,
  squadForceInit: 3,
  squadForce: 3,
  supportUnit: {
    name: "Republic Clone Commandos",
    cost: 4,
    force: 0,
    stamina: 7,
    durability: 2,
    type: "Supporting Unit",
    numChar: 2,
    tags: ["Clone Commando", "Clone Trooper", "Galactic Republic", "Trooper"],
  },
  consumeForce: function (usedForce) {
    this.squadForce = this.squadForce - usedForce;
  },
};

console.log("The squad is: ", squadTeam);

/**
const supportUnit = {
  name: "Republic Clone Commandos",
  cost: 4,
  force: 0,
  stamina: 7,
  durability: 2,
  type: "Supporting Unit",
  numChar: 2,
  tags: ["Clone Commando", "Clone Trooper", "Galactic Republic", "Trooper"],
};


*/
