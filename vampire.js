class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let fromSource = 0;
    let currentVamp = this;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      fromSource++;
    }
    return fromSource;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal) {
      return false;
    }
    return true;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let thisLine = [];
    let thatLine = [];
    let currentVamp = this;
    let otherCurrentVamp = vampire;
    while (currentVamp.creator) {
      thisLine.push(currentVamp);
      currentVamp = currentVamp.creator;
    }
    while (otherCurrentVamp.creator) {
      thatLine.push(otherCurrentVamp);
      otherCurrentVamp = otherCurrentVamp.creator;
    }
    for (const vamp of thisLine) {
      for (const compVamp of thatLine) {
        if (vamp === compVamp) {
          return vamp
        }
      }
    }
return currentVamp
  }

  totalDecendants() {
    let decendants = 0
    decendants +=1 
    for (const decendant of this.decendants) {
      decendants += decendant.totalDecendants()
    }
    return decendants
  }
}

module.exports = Vampire;

