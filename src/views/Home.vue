<template>
  <div>
    <div class="places-new">
      <form v-on:submit.prevent="updatePlace()">
        <h1>update place</h1>
        <div>
          <label>title:</label>
          <input type="text" v-model="currentPlaceParams.title" />
        </div>
        <div>
          <label>body:</label>
          <input type="text" v-model="currentPlaceParams.body" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button v-on:click="destroyPlace()">delete</button>
    </div>
    <div>
      <p>Name</p>
      <input type="text" v-model="newPlace.title" />
      <p>Adress</p>
      <input type="text" v-model="newPlace.body" />
      <button v-on:click="makePlace">Add place</button>
    </div>
    <div v-for="place in places" :key="place.id">
      <h3>{{ place.name }}</h3>
      <p>{{ place.adress }}</p>
      <router-link v-bind:to="`/places/${place.id}`">
        <a href="#" class="btn btn-primary">See More</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      places: [],
      currentPlaceParams: {},
      errors: [],
      place: {},
      newPlace: {},
    };
  },
  created: function () {
    this.indexPlaces();
  },
  methods: {
    indexPlaces: function () {
      axios.get("/places").then((response) => {
        this.places = response.data;
        console.log(this.places);
      });
    },
    makePlace: function () {
      axios
        .place("/places", this.newPlace)
        .then(() => {
          this.$router.push("/places");
        })
        .catch((error) => console.log(error.response));
    },
    updatePlace: function () {
      axios
        .patch(`/places/${this.$route.params.id}`, this.currentPlaceParams)
        .then((response) => {
          this.$router.push(`/places/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    destroyPlace: function () {
      axios.delete(`places/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/places");
      });
    },
  },
};
</script>
