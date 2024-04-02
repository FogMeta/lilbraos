<template>
  <div class="homepage-container">
    <home-navbar></home-navbar>
    <home-header></home-header>
    <div class="body lang-max">
      <home-tabs></home-tabs>
      <home-img-content></home-img-content>
      <home-grid></home-grid>
      <home-suppliers></home-suppliers>
    </div>
  </div>
</template>

<script setup>
import '../../assets/main.css'
import HomeNavbar from './components/home-navbar.vue'
import HomeHeader from './components/home-header.vue'
import HomeTabs from './components/home-tabs.vue'
import HomeImgContent from './components/home-img-content.vue'
import HomeGrid from './components/home-grid.vue'
import HomeSuppliers from './components/home-suppliers.vue'
</script>

<style lang="less" scoped>
.homepage-container {
  background-color: @white-color;
  line-height: 1.1;
  .body {
    padding: 77px 20px;
    margin: auto;
  }
}
</style>
