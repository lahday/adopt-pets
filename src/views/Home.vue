<template>
  <div class="home">
    <h1> Adopt a pet </h1>
    {{ getCatCount.length }}
    {{ animalCount }}
    <button @click="toggleAddPet" class="btn btn-primary">Add New Pet</button>
     <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['dog', 'cats']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age :" label-for="input-2">
        <b-form-input
          type="number"
          id="input-2"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null

      }
    }
  },
  computed: {
    ...mapGetters(['animalCount', 'getCatCount'])
  },
  methods: {
    ...mapActions(['addPet']),
    toggleAddPet () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
    }
  }
}
</script>

<style>

</style>
