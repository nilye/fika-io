<template>
  <div>
    <hero></hero>
    <div class="home-main">
      <div class="home-desc">Navigator, Ads, Popups and horrible layouts always interfere with reading. Fika is a tool which can help you extract the main content from the webpage and present it in a peaceful reading mode.
      </div>
    </div>
    <comparison></comparison>
    <div class="home-main">
      <feature></feature>
      <pricing></pricing>
      <div class="my-9" style="text-align: center">
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
import Comparison from '../views/home/comparison'
import Feature from '../views/home/feature'
import Pricing from '../views/home/pricing'
import HomeFooter from '../views/home/footer'
export default {
  name: 'home',
  components: { HomeFooter, Pricing, Feature, Comparison, Hero },
}
</script>

<style>
</style>