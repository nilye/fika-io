<template>
  <div class="home">
    <hero></hero>
    <before-after class="home-sec"></before-after>
    <features class="home-sec"></features>
    <comparison class="home-sec"></comparison>
    <producthunt class="home-sec"></producthunt>
    <pricing class="home-sec"></pricing>
    <media class="home-sec"></media>
    <div class="home-col">
      <div class="mb-6 mt-2 text-center">
        <a target="_blank" href="https://chrome.google.com/webstore/detail/fika-reader-mode/fbcdnjeoghampomjjaahjgjghdjdbbcj">
          <img style="width: 320px" src="../assets/img/ChromeWebStore.png">
        </a>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import Hero from '../views/home/hero'
import BeforeAfter from '../views/home/before-after'
import Features from '../views/home/features'
import Pricing from '../views/home/pricing'
import HomeFooter from '../views/home/footer'
import Comparison from '../views/home/comparison'
import Producthunt from '../views/home/producthunt'
import Media from '../views/home/media'
export default {
  name: 'home',
  components: { Media, Producthunt, Comparison, HomeFooter, Pricing, Features, BeforeAfter, Hero },
}
</script>

<style>
</style>