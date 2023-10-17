const tree = {
    name: "Banana tree",
    species: "Musa acuminata",
    fruit: "Banana",
    get getSpecies() {
        return this.species;
    },
    set setSpecies(value) {
        this.species = value;
    }
}

tree.setSpecies = "Hardy banana";
console.log(tree.species);