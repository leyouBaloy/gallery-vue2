<template>
    <img v-lazy="url" alt="">
  </template>
  
  <script>
  export default {
    props: {
      url: {
        type: String,
        required: true
      }
    }
  }
  </script>
  