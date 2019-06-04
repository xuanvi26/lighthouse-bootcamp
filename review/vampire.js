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
      vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
      return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
      let num = 0;
      let cur = this;
      while (cur.creator !== null) {
        cur = cur.creator;
        num++;
      }
      return num;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
      return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal ? true : false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    } else {
      for (let under of this.offspring) {
        const match = under.vampireWithName(name);
        if (match) return match;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let count = 0;
    for (let under of this.offspring) {
      let total = 1 + under.totalDescendents;
      count += total;
    }
    return count;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

    let millenials = [];

    if (this.yearConverted > 1980) millenials.push(this);

    for (let under of this.offspring) {
      millenials = millenials.concat(under.allMillennialVampires);
    }

    return millenials;
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // two possibilites: return the older vampire or someone even older then that 
  // in the second possibility you can check if they have the same parent if they are at the same level
  closestCommonAncestor(vampire) {
      let older = this.isMoreSeniorThan(vampire) ? this : vampire;
      let cur = this.isMoreSeniorThan(vampire) ? vampire: this;

      if (vampire === this) return this;


      while (older.numberOfVampiresFromOriginal !== cur.numberOfVampiresFromOriginal) {
        if (cur.creator === older) return older;
        else cur = cur.creator;
      }

      while (older.creator) {
        if (older.creator === cur.creator) return older.creator;
        else {
          older = older.creator;
          cur = cur.creator;
        }
      }
  }
}

module.exports = Vampire;

