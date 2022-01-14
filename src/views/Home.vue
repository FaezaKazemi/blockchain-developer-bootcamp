<template>
<div id="app2" :style="dynamicColor" @dblclick="toggleHoverEffect">
    <div id="card">
      <navbar></navbar><br>
      <h1>REAL ESTATE PROJECT</h1>
       <div class="card2">
        <p>This is a blockchain project, that works with MetaMask Wallet and Ganache Adresses.<br>
        RealEstate is a project for registering and transfering the estates <br>for more information please refer to<a href="#"> ABOUT</a> page.</p>
      </div> 
    </div>
</div>
</template>

<script>
import navbar from "../component/navbar.vue";
export default {
  components:{
    navbar
  },
    data(){
        return{
            clientX: 0,
            clientY: 0,
            windowWidth: 0,
            windowHeight: 0,
            colorLightness: 35,
            colorAlpha: 1,
            hoverActive: true 
                }
            },

    computed: {
    colorHue() {
      const hue = 360 / this.windowWidth * this.clientX;
      return parseInt(hue, 10);
    },
    colorSaturation() {
      const saturation = 100 / this.windowHeight * this.clientY;
      return parseInt(saturation, 10);
    },
    dynamicColor() {
      return {
        backgroundColor: `hsla(${this.colorHue},
          ${this.colorSaturation}%,
          ${this.colorLightness}%,
          ${this.colorAlpha})` };

    } },
methods: {
    toggleHoverEffect() {
      this.hoverActive = !this.hoverActive;
    },
    updateMouseLocation(e) {
      let { clientX, clientY } = e;

      if (this.hoverActive) {
        this.clientX = clientX;
        this.clientY = clientY;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    } },
    created() {
    window.addEventListener("resize", this.handleResize);
    document.
    getElementsByTagName("body")[0].
    addEventListener("mousemove", this.updateMouseLocation);
    this.handleResize();
  },

}
</script>

<style>
html,
body,
#app2 {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
}
#card{
    position: absolute;
    top:1px;
    width: 100%;
  background-color: white;
}
.card2{
  width: 100%;
  height: 50%;
  background-color: rgb(71, 70, 70);
  color: white;
  font-size: 17px;
  padding: 5% 5%;
  margin: 5% auto;
}
</style>