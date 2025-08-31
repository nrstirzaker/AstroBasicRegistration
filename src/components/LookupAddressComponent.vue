<template>


  <div class="flex gap-[5px] my-[10px]">

    <div class="">
      <label class="block" for="house_number_name">House Number/Name</label>
      <input class="block inset-shadow-sm/10 bg-white" id="house_number_name" type="text" name="house_number_name" v-model="house_number_name">
    </div>

    <div class="">
      <label class="block" for="street">Street</label>
      <input id="street" type="text" name="street" v-model="street"
             class="w-[375px] block inset-shadow-sm/10 bg-white" >
    </div>
  </div>
  <div class="flex gap-[5px] my-[10px]">
    <div>
      <label class="block " for="village">Village</label>
      <input class="block inset-shadow-sm/10 bg-white"  id="village" type="text" name="village" v-model="village">
    </div>

    <div>
      <label class="block" for="town">Town</label>
      <input class="block w-[100px] inset-shadow-sm/10 bg-white" id="town" type="text" name="town" v-model="town" readonly>
    </div>

    <div>
      <label class="block" for="postcode">Postcode</label>
      <input class="block inset-shadow-sm/10 bg-white" id="postcode" type="text" name="post_code" v-model="postcode">
    </div>

  </div>

</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
//import useScript from "./useScript";
//const VITE_GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;
//const {PlacesClient} = require('@googlemaps/places').v1;
//const placesClient = new PlacesClient();

//const src = "https://maps.googleapis.com/maps/api/js?key=" + VITE_GOOGLE_MAPS_KEY +"&sensor=false&libraries=places"

let street = ref('');
let streetRef = ref('');
let house_number_name = ref('');
let postcode = ref('');
let village = ref('');
let town = ref('');

// function displayAddress(event : any) {
//
//   if (event.key === "Enter" && street.value.length > 0) {
//     console.log("ENTER")
//   }
//   callSearchText(streetRef.value)
// }


// async function callSearchText(textQuery: string) {
//   // Construct request
//   const request = {
//     textQuery,
//   };
//
//   // Run request
//   const response = await placesClient.searchText(request, {
//     otherArgs: {
//       headers: {
//         'X-Goog-FieldMask': 'places.displayName',
//       },
//     },
//   });
//   console.log(response);
// }

onMounted(async () => {
  //await useScript(src);
  // let options = {
  //   types: ['address'],
  //   componentRestrictions: {
  //     country: 'uk'
  //   },
  //   field:["formatted_address"]
  //
  // }


// Instantiates a client


  // await google.maps.importLibrary("places");
  // let autocomplete = new google.maps.places.Autocomplete(streetRef.value, options);
  //
  // google.maps.event.addListener(autocomplete, 'place_changed', function() {
  //   let place = autocomplete.getPlace();
  //   for (let i = 0; i < place.address_components.length; i++) {
  //     for (let j = 0; j < place.address_components[i].types.length; j++) {
  //       console.log(place.address_components[i].types[j]);
  //       console.log(place.address_components[i].long_name);
  //       if (place.address_components[i].types[j] == "postal_code") {
  //         postcode.value =  place.address_components[i].long_name;
  //       }
  //       if (place.address_components[i].types[j] == "street_number") {
  //         number_name.value =  place.address_components[i].long_name;
  //       }
  //       if (place.address_components[i].types[j] == "locality") {
  //         village.value =  place.address_components[i].long_name;
  //       }
  //       if (place.address_components[i].types[j] == "postal_town") {
  //         town.value =  place.address_components[i].long_name;
  //       }
  //     }
  //   }
  // })


})


</script>

<style scoped>
</style>