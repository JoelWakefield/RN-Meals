export default class Requirement {
  constructor(ingredient, amount, measurement, isOptional = false) {
    this.ingredient = ingredient;
    this.amount = amount;
    this.measurement = measurement;
    this.isOptional = isOptional;
  }
}
