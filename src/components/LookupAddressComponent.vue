<template>
  <form>

    <fieldset class="address-form-group">
      <div class="grid grid-cols-[200px_200px_200px] grid-rows-2 justify-start">

        <div class="col-span-2">
          <label for="street">Street</label>
          <input id="street" type="text" ref="streetRef" v-model="street" @keyup="displayAddress"
                 @input="displayAddress" class="w-[375px]">
        </div>

        <div class="col-span-1">
          <label for="number_name">Number/Name</label>
          <input id="number_name" type="text" v-model="number_name">
        </div>

        <div>
          <label for="postcode">Postcode</label>
          <input id="postcode" type="text" v-model="postcode">
        </div>

        <div>
          <label for="village">Village</label>
          <input id="village" type="text" v-model="village">
        </div>

        <div>
          <label for="town">Town</label>
          <input id="town" type="text" v-model="town">
        </div>
      </div>
    </fieldset>

  </form>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import useScript from "./useScript";

const src =

let street = ref('');
let streetRef = ref('');
let number_name = ref('');
let postcode = ref('');
let village = ref('');
let town = ref('');

function displayAddress(event) {

  if (event.key === "Enter" && street.value.length > 0) {
    console.log("ENTER")
  }
}

onMounted(async () => {
  //await useScript(src);
  let options = {
    types: ['address'],
    componentRestrictions: {
      country: 'uk'
    },
    field:["formatted_address"]

  }
  await google.maps.importLibrary("places");
  let autocomplete = new google.maps.places.Autocomplete(streetRef.value, options);

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    let place = autocomplete.getPlace();
    for (let i = 0; i < place.address_components.length; i++) {
      for (let j = 0; j < place.address_components[i].types.length; j++) {
        console.log(place.address_components[i].types[j]);
        console.log(place.address_components[i].long_name);
        if (place.address_components[i].types[j] == "postal_code") {
          postcode.value =  place.address_components[i].long_name;
        }
        if (place.address_components[i].types[j] == "street_number") {
          number_name.value =  place.address_components[i].long_name;
        }
        if (place.address_components[i].types[j] == "locality") {
          village.value =  place.address_components[i].long_name;
        }
        if (place.address_components[i].types[j] == "postal_town") {
          town.value =  place.address_components[i].long_name;
        }
      }
    }
  })


})


</script>

<style scoped>
</style>