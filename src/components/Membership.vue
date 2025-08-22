<template>
  <div class="ml-40">
    <p> What level of involvement do you want?</p>
    <input type="radio" id="follower" name="membership" value="Follower" @click="disableTextArea"/>
    <label for="follower">Follower (I am unable to come to meetings but I want to be keep up to
      date)</label><br>

    <input type="radio" id="participant" name="membership" value="Participant" @click="disableTextArea"/>
    <label for="participant">Participant (I am able to come to village meetings)</label><br>

    <input type="radio" id="activist" name="membership" value="Activist" @click="enableTextArea">
    <label for="activist">Activist (I want to be involved in other ways)</label><br>
  </div>

  <label for="ways_to_help">Ways I can help</label>
  <textarea id="ways_to_help" :disabled="isDisabled" name="ways_to_help" :value="waysToHelpValue"/>
</template>


<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue'

const isDisabled = ref(true)
const waysToHelpValue = ref("")

onMounted(() => {

})


function disableTextArea(){
  console.log("disableTextArea")
  isDisabled.value = true
  waysToHelpValue.value = ""
}

function enableTextArea(){
  console.log("enableTextArea")
  isDisabled.value = false
}

</script>



<style scoped>

</style>