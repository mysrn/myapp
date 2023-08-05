<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Al-Quran Digital</a>
      </div>
    </nav>
    <AllSurat />
  </div>
</template>

<script>
  import AllSurat from './components/AllSurat.vue'
  export default{
    components:{
      AllSurat
    },
    data() {
      return {
        //
      }
    },
    mounted() {
      //
    },
    methods: {
      //
    },
  }
</script>

