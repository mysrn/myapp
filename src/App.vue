<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h3 class="navbar-brand">
          <span>
            <router-link to="/myappquran" class="custom-link">
              Al-Quran Digital</router-link>
          </span>
        </h3>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script>
  import {RouterView} from 'vue-router'
  export default{
    data() {
      return {
        
      }
    },
    methods: {
      //
    },
  }
</script>

