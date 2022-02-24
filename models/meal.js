export default class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    requirements,
    steps,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegitarian
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.requirements = requirements;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isLactoseFree = isLactoseFree;
    this.isVegan = isVegan;
    this.isVegitarian = isVegitarian;
  }
}
