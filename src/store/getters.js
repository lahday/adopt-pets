export default {
  animalCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getCatCount: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
