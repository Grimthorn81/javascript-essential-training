/**
 * Practice:
 *
 */

import { SquadTeam, Unit, SupportUnit, PrimaryUnit } from "./units.js";

const primary1 = new PrimaryUnit(
  "Luminara",
  3,
  9,
  3,
  1,
  ["Force User", "Galactic Republic", "Jedi"],
  8
);

const support1 = new SupportUnit(
  "Clone Commando",
  0,
  7,
  2,
  2,
  ["Clone Commando", "Clone Trooper", "Galactic Republic", "Trooper"],
  4
);

console.log("the primary unit is:", primary1);
console.log("the supporting unit is:", support1);

const squadTeam1 = new SquadTeam(
  "Plans and Preparation",
  8,
  3,
  3,
  "Republic Clone Commandos",
  4,
  0,
  7,
  2,
  "Supporting Unit",
  2,
  ["Clone Commando", "Clone Trooper", "Galactic Republic", "Trooper"]
);

console.log("The squad is: ", squadTeam1);

console.log("The force is: ", squadTeam1.squadForce);

squadTeam1.consumeForce(1);

console.log("The new force is: ", squadTeam1.squadForce);

// HTML
const addUnit = function (currentUnit) {
  const newUnit = document.createElement("unit");
  console.log(currentUnit);
  newUnit.innerHTML = `
    <h1>${currentUnit.name}</h1>
    <ul>
      <li>Stamina: ${currentUnit.stamina}</li>
      <li>Durability: ${currentUnit.durability}</li>
      <li>Number of Characters: ${currentUnit.numChar}</li>
    </ul>
  `;
  return newUnit;
};

const main = document.querySelector("main");
console.log(addUnit(primary1));
main.append(addUnit(primary1));
main.append(addUnit(support1));
