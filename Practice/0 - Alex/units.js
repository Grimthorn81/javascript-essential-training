/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

export class SquadTeam {
  constructor(
    squadName,
    squadPoints,
    squadForceInit,
    squadForce,
    supportUnitName,
    supportUnitCost,
    supportUnitForce,
    supportUnitStamina,
    supportUnitDurability,
    supportUnitType,
    supportUnitNumChar,
    supportUnitTags
  ) {
    this.squadName = squadName;
    this.squadPoints = squadPoints;
    this.squadForceInit = squadForceInit;
    this.squadForce = squadForce;
    this.supportUnit = {
      name: supportUnitName,
      cost: supportUnitCost,
      force: supportUnitForce,
      stamina: supportUnitStamina,
      durability: supportUnitDurability,
      type: supportUnitType,
      numChar: supportUnitNumChar,
      tags: supportUnitTags,
    };
  }
  consumeForce(usedForce) {
    this.squadForce = this.squadForce - usedForce;
  }
}

export class Unit {
  constructor(name, force, stamina, durability, numChar, tags) {
    this.name = name;
    this.force = force;
    this.stamina = stamina;
    this.durability = durability;
    this.numChar = numChar;
    this.tags = tags;
  }
}

export class SupportUnit extends Unit {
  constructor(name, force, stamina, durability, numChar, tags, cost) {
    super(name, force, stamina, durability, numChar, tags);
    this.cost = cost;
    this.type = "Support Unit";
  }
}

export class PrimaryUnit extends Unit {
  constructor(name, force, stamina, durability, numChar, tags, sPoints) {
    super(name, force, stamina, durability, numChar, tags);
    this.sPoints = sPoints;
    this.type = "Primary Unit";
  }
}
