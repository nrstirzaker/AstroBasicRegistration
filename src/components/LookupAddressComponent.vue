<template>



      <div class="grid grid-cols-[200px_200px_200px] grid-rows-2 justify-start">

        <div class="col-span-1">
          <label for="house_number_name">House Number/Name</label>
          <input id="house_number_name" type="text" v-model="house_number_name">
        </div>

        <div class="col-span-2">
          <label for="street">Street</label>
          <input id="street" type="text" v-model="street"
                 class="w-[375px]">
        </div>

        <div>
          <label for="village">Village</label>
          <input id="village" type="text" v-model="village">
        </div>

        <div>
          <label for="town">Town</label>
          <input id="town" type="text" v-model="town" readonly>
        </div>

        <div>
          <label for="postcode">Postcode</label>
          <input id="postcode" type="text" v-model="postcode">
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
let town = ref('Woking');

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